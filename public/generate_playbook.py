"""
Generate The Leadership Playbook PDF for The Leader's Table
Navy/Gold executive design using ReportLab
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable,
    Table, TableStyle, PageBreak, KeepTogether
)
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfgen import canvas
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate
from reportlab.lib.colors import HexColor

# ── Brand Colors ──────────────────────────────────────────────────────────────
NAVY      = HexColor("#0D1B2A")   # deep navy
NAVY_MID  = HexColor("#1A2E45")   # mid navy
GOLD      = HexColor("#C9A84C")   # warm gold
GOLD_LIGHT= HexColor("#E8C97A")   # light gold
CREAM     = HexColor("#FAF7F0")   # off-white cream
GRAY_LIGHT= HexColor("#E8E4DC")   # light warm gray
GRAY_MID  = HexColor("#9B9589")   # medium warm gray
WHITE     = HexColor("#FFFFFF")

W, H = letter  # 612 x 792 pt

# ── Helper: draw background rectangle ─────────────────────────────────────────
def draw_bg(c, color, x=0, y=0, w=None, h=None):
    c.setFillColor(color)
    c.rect(x, y, w or W, h or H, fill=1, stroke=0)

def draw_gold_line(c, y, x_start=0.6*inch, x_end=None, thickness=1.5):
    c.setStrokeColor(GOLD)
    c.setLineWidth(thickness)
    c.line(x_start, y, x_end or (W - 0.6*inch), y)

def draw_text(c, text, x, y, font="Helvetica", size=12, color=WHITE, align="left"):
    c.setFillColor(color)
    c.setFont(font, size)
    if align == "center":
        c.drawCentredString(x, y, text)
    elif align == "right":
        c.drawRightString(x, y, text)
    else:
        c.drawString(x, y, text)

# ── COVER PAGE ────────────────────────────────────────────────────────────────
def draw_cover(c):
    # Full navy background
    draw_bg(c, NAVY)

    # Gold top accent bar
    draw_bg(c, GOLD, x=0, y=H - 0.35*inch, w=W, h=0.35*inch)

    # Decorative vertical stripe (left)
    draw_bg(c, NAVY_MID, x=0, y=0, w=0.55*inch, h=H)
    draw_bg(c, GOLD, x=0.47*inch, y=0, w=0.08*inch, h=H)

    # Gold bottom band
    draw_bg(c, NAVY_MID, x=0, y=0, w=W, h=1.35*inch)
    draw_bg(c, GOLD, x=0, y=1.27*inch, w=W, h=0.08*inch)

    # ── Monogram / Logo mark ──────────────────────────────────────────────────
    cx = W / 2
    # Outer circle
    c.setStrokeColor(GOLD)
    c.setFillColor(NAVY_MID)
    c.setLineWidth(2)
    c.circle(cx, H - 1.7*inch, 0.48*inch, fill=1, stroke=1)
    # "LT" initials
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 22)
    c.drawCentredString(cx, H - 1.82*inch, "LT")

    # ── Brand name ────────────────────────────────────────────────────────────
    draw_text(c, "THE LEADER'S TABLE", cx, H - 2.42*inch,
              font="Helvetica-Bold", size=13, color=GOLD, align="center")
    draw_text(c, "theleaderstable.xyz  •  161K+ Community", cx, H - 2.66*inch,
              font="Helvetica", size=9.5, color=GOLD_LIGHT, align="center")

    # ── Gold divider ──────────────────────────────────────────────────────────
    c.setStrokeColor(GOLD)
    c.setLineWidth(1)
    line_w = 3.2*inch
    c.line(cx - line_w/2, H - 2.88*inch, cx + line_w/2, H - 2.88*inch)

    # ── Main title block ──────────────────────────────────────────────────────
    draw_text(c, "THE", cx, H - 3.42*inch,
              font="Helvetica", size=18, color=GOLD_LIGHT, align="center")
    draw_text(c, "LEADERSHIP", cx, H - 3.95*inch,
              font="Helvetica-Bold", size=46, color=WHITE, align="center")
    draw_text(c, "PLAYBOOK", cx, H - 4.52*inch,
              font="Helvetica-Bold", size=46, color=GOLD, align="center")

    # ── Subtitle ─────────────────────────────────────────────────────────────
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.75)
    c.line(cx - line_w/2, H - 4.82*inch, cx + line_w/2, H - 4.82*inch)

    draw_text(c, "10 Frameworks Every New Leader Needs", cx, H - 5.18*inch,
              font="Helvetica-BoldOblique", size=15, color=CREAM, align="center")
    draw_text(c, "Proven models to lead with clarity, confidence & impact", cx, H - 5.48*inch,
              font="Helvetica-Oblique", size=10.5, color=GRAY_MID, align="center")

    # ── Framework preview strip ───────────────────────────────────────────────
    box_y = H - 7.2*inch
    box_h = 1.25*inch
    draw_bg(c, NAVY_MID, x=0.6*inch, y=box_y, w=W - 1.2*inch, h=box_h)
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.75)
    c.rect(0.6*inch, box_y, W - 1.2*inch, box_h, fill=0, stroke=1)

    frameworks_preview = [
        "Situational Leadership", "RACI Matrix", "OKRs",
        "Radical Candor", "Eisenhower Matrix",
        "Servant Leadership", "GROW Model",
        "Psychological Safety", "Five Dysfunctions", "Transformational Leadership",
    ]
    draw_text(c, "INSIDE THIS PLAYBOOK:", W/2, box_y + box_h - 0.22*inch,
              font="Helvetica-Bold", size=8, color=GOLD, align="center")

    col_count = 5
    col_w = (W - 1.2*inch) / col_count
    for i, fw in enumerate(frameworks_preview):
        col = i % col_count
        row = i // col_count
        tx = 0.6*inch + col * col_w + col_w / 2
        ty = box_y + box_h - 0.46*inch - row * 0.26*inch
        draw_text(c, fw, tx, ty, font="Helvetica", size=7.5, color=CREAM, align="center")

    # ── Bottom footer ─────────────────────────────────────────────────────────
    draw_text(c, "COMPLIMENTARY GUIDE  •  theleaderstable.xyz", cx, 0.52*inch,
              font="Helvetica", size=8, color=GOLD_LIGHT, align="center")
    draw_text(c, "\u00a9 The Leader's Table  |  Not for resale or distribution", cx, 0.30*inch,
              font="Helvetica", size=7, color=GRAY_MID, align="center")

    c.showPage()


# ── BACK PAGE ─────────────────────────────────────────────────────────────────
def draw_back(c):
    draw_bg(c, NAVY)
    draw_bg(c, GOLD, x=0, y=H - 0.35*inch, w=W, h=0.35*inch)
    draw_bg(c, NAVY_MID, x=0, y=0, w=W, h=1.35*inch)
    draw_bg(c, GOLD, x=0, y=1.27*inch, w=W, h=0.08*inch)

    cx = W / 2

    # Logo
    c.setStrokeColor(GOLD)
    c.setFillColor(NAVY_MID)
    c.setLineWidth(2)
    c.circle(cx, H - 1.5*inch, 0.40*inch, fill=1, stroke=1)
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 18)
    c.drawCentredString(cx, H - 1.62*inch, "LT")

    draw_text(c, "THE LEADER'S TABLE", cx, H - 2.06*inch,
              font="Helvetica-Bold", size=14, color=GOLD, align="center")

    c.setStrokeColor(GOLD)
    c.setLineWidth(1)
    lw = 2.8*inch
    c.line(cx - lw/2, H - 2.26*inch, cx + lw/2, H - 2.26*inch)

    draw_text(c, "You've got the frameworks.", cx, H - 2.72*inch,
              font="Helvetica-Bold", size=20, color=WHITE, align="center")
    draw_text(c, "Now join 161,000+ leaders putting them into practice.", cx, H - 3.05*inch,
              font="Helvetica-Oblique", size=12, color=CREAM, align="center")

    # CTA boxes
    cta_items = [
        ("Weekly Leadership Insights", "Fresh frameworks & real-world application every week"),
        ("Executive Community", "Connect with 161K+ leaders navigating the same challenges"),
        ("Free Resources", "Templates, guides & playbooks like this one — always free"),
    ]
    box_start = H - 3.45*inch
    for i, (title, desc) in enumerate(cta_items):
        bx = 1.1*inch
        bw = W - 2.2*inch
        bh = 0.72*inch
        by = box_start - i * (bh + 0.15*inch)
        draw_bg(c, NAVY_MID, x=bx, y=by, w=bw, h=bh)
        c.setStrokeColor(GOLD)
        c.setLineWidth(0.75)
        c.rect(bx, by, bw, bh, fill=0, stroke=1)
        # Gold dot accent
        c.setFillColor(GOLD)
        c.circle(bx + 0.28*inch, by + bh/2, 0.06*inch, fill=1, stroke=0)
        draw_text(c, title, bx + 0.55*inch, by + bh/2 + 0.07*inch,
                  font="Helvetica-Bold", size=10, color=GOLD)
        draw_text(c, desc, bx + 0.55*inch, by + bh/2 - 0.16*inch,
                  font="Helvetica", size=8.5, color=CREAM)

    # Website + LinkedIn CTA
    cta_y = H - 6.0*inch
    draw_bg(c, GOLD, x=1.4*inch, y=cta_y, w=W - 2.8*inch, h=0.5*inch)
    draw_text(c, "Visit theleaderstable.xyz to access all free resources",
              cx, cta_y + 0.16*inch,
              font="Helvetica-Bold", size=10.5, color=NAVY, align="center")

    draw_text(c, "Follow us on LinkedIn: linkedin.com/company/the-leaders-table",
              cx, cta_y - 0.35*inch,
              font="Helvetica", size=9, color=GOLD_LIGHT, align="center")
    draw_text(c, "Share this guide with a leader in your network.",
              cx, cta_y - 0.58*inch,
              font="Helvetica-Oblique", size=9, color=GRAY_MID, align="center")

    # Footer
    draw_text(c, "\u00a9 2024 The Leader's Table  •  theleaderstable.xyz  •  161K+ Community",
              cx, 0.52*inch, font="Helvetica", size=7.5, color=GOLD_LIGHT, align="center")
    draw_text(c, "All frameworks attributed to their original authors. This guide is for educational purposes.",
              cx, 0.32*inch, font="Helvetica", size=7, color=GRAY_MID, align="center")

    c.showPage()


# ── FRAMEWORK DATA ─────────────────────────────────────────────────────────────
FRAMEWORKS = [
    {
        "number": "01",
        "name": "Situational Leadership",
        "attribution": "Paul Hersey & Ken Blanchard, 1969",
        "tagline": "Adapt your style to where your people are",
        "description": (
            "Hersey and Blanchard's Situational Leadership model holds that no single "
            "leadership style fits every situation. Effective leaders diagnose each team "
            "member's development level — their combination of competence and commitment — "
            "and then flex their style between Directing, Coaching, Supporting, and Delegating."
        ),
        "when_to_use": (
            "When onboarding new hires, managing a mixed-experience team, or when someone "
            "who was once high-performing has become disengaged. Any time you notice a "
            "mismatch between someone's ability and their motivation."
        ),
        "try_this": (
            "Pick one direct report. Rate their current competence (1-10) and commitment "
            "(1-10) on their main responsibility. If competence is low but commitment high, "
            "shift toward Directing. If both are high, move to Delegating. Adjust this "
            "week's check-in accordingly."
        ),
    },
    {
        "number": "02",
        "name": "The RACI Matrix",
        "attribution": "Project management methodology, widely adopted in the 1980s",
        "tagline": "End confusion about who owns what",
        "description": (
            "RACI is a responsibility assignment chart that maps every key task or decision "
            "to four roles: Responsible (does the work), Accountable (owns the outcome), "
            "Consulted (provides input), and Informed (kept in the loop). Only one person "
            "should ever be Accountable for any single task."
        ),
        "when_to_use": (
            "When launching a new project, when work is falling through the cracks, or "
            "when team members are unclear about decision authority. Especially powerful "
            "in cross-functional initiatives where multiple teams overlap."
        ),
        "try_this": (
            "Take your team's top three ongoing projects and list the five most critical "
            "tasks per project. For each task, assign R, A, C, I to team members. Share "
            "the matrix in your next team meeting and ask: 'Does this reflect reality?' "
            "Fix any mismatches together."
        ),
    },
    {
        "number": "03",
        "name": "OKRs — Objectives & Key Results",
        "attribution": "Andrew Grove (Intel), popularized by John Doerr at Google",
        "tagline": "Align your team around what matters most",
        "description": (
            "OKRs connect ambitious goals (Objectives) to measurable outcomes (Key Results). "
            "An Objective is qualitative and inspiring — the 'what.' Key Results are "
            "quantitative and time-bound — the 'how we'll know we got there.' OKRs are "
            "typically set quarterly, with 60-70% attainment considered a success (meaning "
            "they should stretch, not be safe bets)."
        ),
        "when_to_use": (
            "When your team lacks direction, when effort feels disconnected from company "
            "strategy, or when you need everyone rowing in the same direction. OKRs are "
            "equally powerful for a five-person team as for a 5,000-person organisation."
        ),
        "try_this": (
            "Write one team OKR for the next 90 days. Start with the Objective: "
            "'We will [inspiring goal].' Then write two to three Key Results: "
            "'Measured by [specific metric] reaching [target] by [date].' "
            "Share it with your team and ask them to rate how motivating it feels — 1 to 10."
        ),
    },
    {
        "number": "04",
        "name": "Radical Candor",
        "attribution": "Kim Scott, 2017 — author and former Google & Apple executive",
        "tagline": "Care personally. Challenge directly.",
        "description": (
            "Kim Scott's Radical Candor framework sits at the intersection of two axes: "
            "caring personally about your people and challenging them directly. Too much "
            "care without challenge produces Ruinous Empathy — kind but ultimately "
            "unhelpful. Challenge without care becomes Obnoxious Aggression. The goal is "
            "the upper-right quadrant: honest, caring feedback that helps people grow."
        ),
        "when_to_use": (
            "Whenever you need to give feedback — which is constantly. Particularly "
            "useful when you've been avoiding a difficult conversation, when someone is "
            "underperforming and doesn't know it, or when you want to build a culture "
            "where feedback flows freely in all directions."
        ),
        "try_this": (
            "Think of a piece of feedback you've been holding back from someone on your "
            "team. Before your next 1:1, write one sentence that leads with genuine "
            "care ('I'm sharing this because I think you're capable of so much more') "
            "followed by the specific, direct observation. Deliver it this week."
        ),
    },
    {
        "number": "05",
        "name": "The Eisenhower Matrix",
        "attribution": "Dwight D. Eisenhower, adapted by Stephen Covey in The 7 Habits",
        "tagline": "Stop being busy. Start being productive.",
        "description": (
            "The matrix organises tasks across two dimensions — Urgent vs. Not Urgent and "
            "Important vs. Not Important — creating four quadrants. Q1 (Urgent + Important): "
            "Do now. Q2 (Not Urgent + Important): Schedule. Q3 (Urgent + Not Important): "
            "Delegate. Q4 (Not Urgent + Not Important): Eliminate. Most leaders live in Q1 "
            "and Q3; great leaders protect Q2, where strategy lives."
        ),
        "when_to_use": (
            "When you feel overwhelmed, reactive, or like you're always fighting fires. "
            "Use it in weekly planning, when your task list is unmanageable, or to coach "
            "a team member who is struggling with prioritisation."
        ),
        "try_this": (
            "At the start of tomorrow, list everything on your plate. Map each item to "
            "one of the four quadrants. Count how many items land in Q2 (strategic, "
            "proactive work). If it's fewer than three, block 90 minutes this week "
            "specifically for Q2 work — and protect it like a board meeting."
        ),
    },
    {
        "number": "06",
        "name": "Servant Leadership",
        "attribution": "Robert K. Greenleaf, 1970 — 'The Servant as Leader'",
        "tagline": "Lead by lifting others up",
        "description": (
            "Greenleaf proposed that the most effective leaders start with the desire to "
            "serve first — and that leadership is then chosen as the means to serve most "
            "effectively. Servant leaders prioritise the growth and wellbeing of their "
            "people, remove obstacles, share power, and measure success by whether those "
            "they serve are growing, becoming healthier, wiser, freer, and more capable."
        ),
        "when_to_use": (
            "When building long-term team culture, when trust is low, or when you're "
            "taking over a team that has been micromanaged. Also powerful for leaders "
            "who want to create genuinely high-retention environments."
        ),
        "try_this": (
            "In your next team meeting, open with one question: 'What's the single "
            "biggest obstacle slowing you down right now?' Listen without defending. "
            "Take notes. Then spend the next 48 hours removing at least one of those "
            "obstacles. Report back to the team what you did."
        ),
    },
    {
        "number": "07",
        "name": "The GROW Model",
        "attribution": "Sir John Whitmore, Graham Alexander & Alan Fine — 1980s",
        "tagline": "Coach your team instead of telling them",
        "description": (
            "GROW is a four-stage coaching conversation framework: Goal (what does the "
            "person want to achieve?), Reality (what is the current situation?), Options "
            "(what could they do?), and Will (what will they actually commit to?). It "
            "moves people from stuck to actionable in a single conversation by helping "
            "them generate their own solutions rather than being told what to do."
        ),
        "when_to_use": (
            "In 1:1 conversations when a team member brings you a problem. Also powerful "
            "for performance conversations, career development discussions, and any time "
            "you want to build ownership rather than dependency."
        ),
        "try_this": (
            "The next time someone comes to you with a problem, resist the urge to "
            "solve it immediately. Instead, ask four GROW questions: 'What outcome do "
            "you want? Where are things now? What options have you considered? What "
            "will you do and by when?' Watch their ownership shift."
        ),
    },
    {
        "number": "08",
        "name": "Psychological Safety",
        "attribution": "Amy C. Edmondson, Harvard Business School — 1999",
        "tagline": "Create the conditions for people to speak up",
        "description": (
            "Edmondson's research showed that the highest-performing teams at Google "
            "and beyond shared one defining quality: members felt safe to take "
            "interpersonal risks — speaking up, disagreeing, admitting mistakes — "
            "without fear of humiliation or punishment. Psychological safety is not "
            "about being nice; it is about creating the conditions where honest, "
            "productive work becomes possible."
        ),
        "when_to_use": (
            "When your team is quiet in meetings, when ideas only come from the same "
            "people, when errors get hidden rather than surfaced, or when you want "
            "to build an innovative culture where calculated risk-taking is encouraged."
        ),
        "try_this": (
            "At your next team meeting, share a mistake you made recently — and what "
            "you learned from it. Then ask: 'What's something we're doing that we "
            "should probably stop but haven't talked about?' Model vulnerability first. "
            "The team will follow."
        ),
    },
    {
        "number": "09",
        "name": "The Five Dysfunctions of a Team",
        "attribution": "Patrick Lencioni, 2002",
        "tagline": "Name what's really holding your team back",
        "description": (
            "Lencioni's model presents a pyramid of five team failures, each built on "
            "the one below: Absence of Trust (unwilling to be vulnerable), Fear of "
            "Conflict (artificial harmony over real debate), Lack of Commitment "
            "(ambiguity over buy-in), Avoidance of Accountability (low standards go "
            "unchallenged), and Inattention to Results (ego or status over collective "
            "outcomes). Fix the foundation and the rest improves."
        ),
        "when_to_use": (
            "When diagnosing a team that is underperforming despite having capable "
            "people. When conflict is either absent (unhealthy) or unproductive "
            "(destructive). When accountability conversations aren't happening."
        ),
        "try_this": (
            "Run a five-minute team health check: have each team member privately "
            "rate your team 1-5 on each dysfunction (Trust, Conflict, Commitment, "
            "Accountability, Results). Average the scores. Share the results "
            "together. Use the lowest score as the starting point for your next "
            "team development conversation."
        ),
    },
    {
        "number": "10",
        "name": "Transformational Leadership",
        "attribution": "James MacGregor Burns (1978), developed by Bernard M. Bass",
        "tagline": "Inspire people to become more than they thought possible",
        "description": (
            "Bass expanded Burns' work to describe a leadership approach built on four "
            "components — the Four I's: Idealised Influence (leading by example, earning "
            "trust), Inspirational Motivation (articulating a compelling vision), "
            "Intellectual Stimulation (challenging assumptions, encouraging innovation), "
            "and Individualised Consideration (coaching each person as a unique individual). "
            "Transformational leaders elevate both performance and purpose."
        ),
        "when_to_use": (
            "During periods of change, when morale is low, when a team needs a new "
            "sense of purpose, or when you want to develop future leaders from within "
            "your ranks. Especially effective for long-term culture building."
        ),
        "try_this": (
            "Write a one-paragraph 'leadership vision statement' for your team: "
            "where you're going, why it matters, and how it connects to something "
            "bigger than the daily work. Read it aloud in your next team meeting. "
            "Then ask each person: 'What part of this vision excites you most?' "
            "Listen. Connect their answers back to their work."
        ),
    },
]


# ── CONTENT PAGES ──────────────────────────────────────────────────────────────
def build_content_pages(c, frameworks):
    """
    Draw all framework pages onto the canvas.
    Two frameworks per page (except last page with one if odd count).
    """
    # Group into pairs
    pairs = [frameworks[i:i+2] for i in range(0, len(frameworks), 2)]

    for pair in pairs:
        draw_framework_page(c, pair)


def draw_framework_card(c, fw, card_y, card_h):
    """Draw a single framework card at given y position."""
    margin_x = 0.6*inch
    card_w = W - 2 * margin_x

    # Card background
    c.setFillColor(CREAM)
    c.roundRect(margin_x, card_y, card_w, card_h, 6, fill=1, stroke=0)

    # Left navy accent bar
    c.setFillColor(NAVY)
    c.roundRect(margin_x, card_y, 0.12*inch, card_h, 3, fill=1, stroke=0)

    # Gold number badge
    badge_cx = margin_x + 0.12*inch + 0.32*inch
    badge_cy = card_y + card_h - 0.38*inch
    c.setFillColor(GOLD)
    c.circle(badge_cx, badge_cy, 0.22*inch, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(badge_cx, badge_cy - 0.04*inch, fw["number"])

    # Framework name
    name_x = margin_x + 0.85*inch
    name_y = card_y + card_h - 0.3*inch
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 13)
    c.drawString(name_x, name_y, fw["name"])

    # Attribution
    c.setFillColor(GRAY_MID)
    c.setFont("Helvetica-Oblique", 7.5)
    c.drawString(name_x, name_y - 0.18*inch, fw["attribution"])

    # Tagline
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(name_x, name_y - 0.36*inch, fw["tagline"].upper())

    # Gold rule below header
    rule_y = card_y + card_h - 0.58*inch
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.5)
    c.line(margin_x + 0.85*inch, rule_y, margin_x + card_w - 0.15*inch, rule_y)

    # Three columns: Description | When to Use | Try This
    col_start = margin_x + 0.20*inch
    col_total_w = card_w - 0.35*inch
    col_w = col_total_w / 3
    col_gap = 0.12*inch
    col_w_inner = col_w - col_gap

    sections = [
        ("WHAT IT IS", fw["description"]),
        ("WHEN TO USE IT", fw["when_to_use"]),
        ("TRY THIS TODAY", fw["try_this"]),
    ]

    col_body_h = card_h - 0.72*inch
    col_y_top = card_y + col_body_h + 0.06*inch

    for i, (header, body) in enumerate(sections):
        cx_col = col_start + i * col_w

        # Column header
        if i == 2:
            # Highlight "Try This" column
            c.setFillColor(NAVY)
            c.roundRect(cx_col, card_y + 0.08*inch,
                        col_w_inner, col_body_h, 4, fill=1, stroke=0)
            hdr_color = GOLD
            body_color = CREAM
        else:
            hdr_color = NAVY
            body_color = NAVY_MID

        c.setFillColor(hdr_color)
        c.setFont("Helvetica-Bold", 7)
        c.drawString(cx_col + 0.06*inch, col_y_top - 0.02*inch, header)

        # Small rule under section header
        c.setStrokeColor(GOLD if i == 2 else GRAY_LIGHT)
        c.setLineWidth(0.5)
        c.line(cx_col + 0.06*inch, col_y_top - 0.12*inch,
               cx_col + col_w_inner - 0.06*inch, col_y_top - 0.12*inch)

        # Body text — manually wrap
        c.setFont("Helvetica", 7.2)
        c.setFillColor(body_color)
        wrap_text_in_box(c, body,
                         cx_col + 0.08*inch,
                         col_y_top - 0.2*inch,
                         col_w_inner - 0.14*inch,
                         col_body_h - 0.28*inch,
                         7.2, body_color)


def wrap_text_in_box(c, text, x, y_start, box_w, box_h, font_size, color):
    """Simple word-wrap text drawing within a bounding box."""
    from reportlab.pdfbase.pdfmetrics import stringWidth
    words = text.split()
    line = ""
    lines = []
    for word in words:
        test = (line + " " + word).strip()
        if stringWidth(test, "Helvetica", font_size) <= box_w:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)

    line_h = font_size * 1.38
    y = y_start
    for ln in lines:
        if y_start - y > box_h - line_h:
            break
        c.setFillColor(color)
        c.setFont("Helvetica", font_size)
        c.drawString(x, y, ln)
        y -= line_h


def draw_framework_page(c, fw_pair):
    """Draw a page with one or two framework cards."""
    # Navy background
    draw_bg(c, NAVY)
    # Top gold bar
    draw_bg(c, GOLD, x=0, y=H - 0.35*inch, w=W, h=0.35*inch)
    # Bottom strip
    draw_bg(c, NAVY_MID, x=0, y=0, w=W, h=0.42*inch)
    draw_bg(c, GOLD, x=0, y=0.40*inch, w=W, h=0.04*inch)

    # Page header
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(0.6*inch, H - 0.26*inch, "THE LEADERSHIP PLAYBOOK  •  THE LEADER'S TABLE")
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 7.5)
    c.drawRightString(W - 0.6*inch, H - 0.26*inch, "theleaderstable.xyz")

    # Footer
    c.setFillColor(GOLD_LIGHT)
    c.setFont("Helvetica", 7)
    c.drawCentredString(W/2, 0.16*inch, "theleaderstable.xyz  •  161K+ Leadership Community")

    # Calculate card positions
    usable_top = H - 0.45*inch
    usable_bottom = 0.5*inch
    usable_h = usable_top - usable_bottom
    gap = 0.18*inch

    if len(fw_pair) == 2:
        card_h = (usable_h - gap) / 2
        positions = [
            usable_bottom + card_h + gap,
            usable_bottom,
        ]
    else:
        card_h = usable_h
        positions = [usable_bottom]

    for fw, card_y in zip(fw_pair, positions):
        draw_framework_card(c, fw, card_y, card_h)

    c.showPage()


# ── MAIN ───────────────────────────────────────────────────────────────────────
def main():
    output_path = "/Users/dorilabaki/PROJECTS/Ecosystem/websites/the-leaders-table/public/leadership-playbook.pdf"

    c = canvas.Canvas(output_path, pagesize=letter)
    c.setTitle("The Leadership Playbook: 10 Frameworks Every New Leader Needs")
    c.setAuthor("The Leader's Table")
    c.setSubject("Leadership Frameworks for New Leaders")
    c.setCreator("The Leader's Table — theleaderstable.xyz")

    # Page 1: Cover
    draw_cover(c)

    # Pages 2-6: Framework content (2 per page = 5 pages)
    build_content_pages(c, FRAMEWORKS)

    # Final page: Back / CTA
    draw_back(c)

    c.save()
    print(f"PDF saved: {output_path}")


if __name__ == "__main__":
    main()
