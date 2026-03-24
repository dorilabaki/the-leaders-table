import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface Lead {
  email: string;
  createdAt: string;
}

const LEADS_FILE = join(process.cwd(), 'lib', 'leads.json');

function getLeads(): Lead[] {
  try {
    const data = readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveLeads(leads: Lead[]): void {
  writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const leads = getLeads();
    const exists = leads.some((lead) => lead.email === trimmedEmail);

    if (exists) {
      return NextResponse.json(
        { message: "You're already on the list — check your inbox!" },
        { status: 200 }
      );
    }

    leads.push({ email: trimmedEmail, createdAt: new Date().toISOString() });
    saveLeads(leads);

    return NextResponse.json(
      { message: 'Success! Your playbook is on its way.' },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
