export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
         <h1 style="color: #006D77; font-size: 24px; font-weight: bold; line-height: 1.25; margin-top: 100px;">
           SOFTWARE<br>
           DEVELOPMENT<br>
           PROPOSAL
         </h1>

         <p style="margin-top: 120px;">
           <span style="font-size: 12px; color: #666666;">PREPARED FOR</span><br>
           <span style="font-size: 11px; color: #333333;">Client's name</span><br>
           <span style="font-size: 11px; color: #333333;">Client's company name</span>
         </p>

         <p style="margin-top: 20px;">
           <span style="font-size: 12px; color: #666666;">PREPARED BY</span><br>
           <span style="font-size: 11px; color: #333333;">Your name</span><br>
           <span style="font-size: 11px; color: #333333;">Your company name</span>
         </p>
       `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
          <p style="color: #FF0000; font-size: 14px; font-weight: bold;">Hello,</p>
          <h1 style="font-size: 18px; font-weight: bold; margin-top: 8px;">I'm Your Name</h1>

          <p style="font-size: 11px; line-height: 1.4; margin-top: 16px;">
            123 YOUR STREET<br>
            YOUR CITY, ST 12345<br>
            TEL: 555.555.5555<br>
            YOU.REPLY@EXAMPLE.COM
          </p>

          <h2 style="color: #FF0000; font-size: 14px; font-weight: bold; margin-top: 30px;">Skills</h2>
          <p style="font-size: 11px; margin-top: 8px;">Skills description here. Core competencies and key abilities.</p>

          <h2 style="color: #FF0000; font-size: 14px; font-weight: bold; margin-top: 30px;">Experience</h2>

          <p style="font-size: 10px; color: #666666; margin-top: 16px;">MONTH 20XX – MONTH 20YY</p>
          <p style="font-size: 12px; margin-top: 4px;"><strong>Company Name, Location</strong> — Job Title</p>
          <ul style="font-size: 11px; margin-top: 8px; margin-left: 20px;">
            <li>Key responsibility or achievement</li>
          </ul>

          <h2 style="color: #FF0000; font-size: 14px; font-weight: bold; margin-top: 30px;">Education</h2>
          <p style="font-size: 12px; margin-top: 8px;"><strong>College Name, Location</strong> — Degree</p>

          <h2 style="color: #FF0000; font-size: 14px; font-weight: bold; margin-top: 30px;">Awards</h2>
          <p style="font-size: 11px; margin-top: 8px;">Notable achievement or recognition.</p>
        `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
          <h1 style="font-size: 18px; font-weight: bold;">Your Name</h1>
          <p style="font-size: 11px; line-height: 1.4; margin-top: 8px;">
            123 Your Street<br>
            Your City, ST 12345<br>
            phone: (555) 555-5555<br>
            email: your.email@example.com
          </p>

          <p style="font-size: 11px; margin-top: 24px;">September 24, 2024</p>

          <p style="font-size: 11px; line-height: 1.4; margin-top: 24px;">
            Hiring Manager<br>
            Company Name<br>
            123 Company Street<br>
            Company City, ST 12345
          </p>

          <p style="font-size: 11px; margin-top: 24px;">Dear Hiring Manager,</p>

          <p style="font-size: 11px; line-height: 1.8; margin-top: 20px;">
            Write your cover letter content here...
          </p>

          <p style="font-size: 11px; margin-top: 40px;">Sincerely,</p>
          <p style="font-size: 11px; margin-top: 24px;">Your Name</p>
        `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
          <h1 style="font-size: 18px; font-weight: bold;">Your Band</h1>
          <p style="font-size: 11px; color: #ff4444;">September 24, 20XX</p>

          <p style="font-size: 22px; margin-top: 24px;">Hello fan,</p>

          <p style="font-size: 14px; font-weight: bold; margin-top: 24px;">First, a big thank you!</p>

          <p style="font-size: 11px; color: #666666; line-height: 2.2; margin-top: 24px;">
            Thanks for being such an amazing supporter of our music.<br>
            We're excited to announce our new album is coming soon.<br>
            You'll be the first to hear our latest singles.<br>
            We're planning something special for our loyal fans.<br>
            Stay tuned for exclusive content and updates.<br>
            Can't wait to see you at our next show.
          </p>

          <p style="font-size: 11px; margin-top: 40px;">Lots of love,</p>
          <p style="font-size: 11px; margin-top: 24px;">Your Name</p>
        `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
         <h1 style="font-size: 24px; font-weight: bold; color: #5D4037; margin-top: 200px;">Project Name</h1>
         <p style="font-size: 12px; color: #666666; margin-top: 12px;">09.04.20XX</p>

         <p style="font-size: 12px; color: #666666; line-height: 1.6; margin-top: 36px;">
           Your Name<br>
           Your Company<br>
           123 Your Street<br>
           Your City, ST 12345
         </p>
       `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
         <h1 style="font-size: 16px; font-weight: bold; color: #1e3d59;">YOUR COMPANY</h1>
         <hr style="border: none; border-top: 1px solid rgba(30, 61, 89, 0.5); margin-top: 4px;">

         <p style="font-size: 10px; color: #2c3e50; line-height: 1.6; margin-top: 16px;">
           123 YOUR STREET<br>
           YOUR CITY, ST 12345<br>
           (123) 456-7890<br>
           MYEMAIL@EXAMPLE.COM
         </p>

         <p style="font-size: 10px; color: #2c3e50; background-color: #f8f9fa; padding: 6px 10px; border-radius: 3px; display: inline-block; margin-top: 20px;">September 24, 20XX</p>

         <p style="font-size: 10px; color: #2c3e50; margin-top: 24px;">Dear Ms. Reader,</p>

         <p style="font-size: 10px; color: #2c3e50; line-height: 2.2; margin-top: 16px; padding-left: 12px; border-left: 2px solid rgba(23, 162, 184, 0.3);">
           Thank you for your interest in our services.<br>
           We are pleased to provide you with our latest product offerings.<br>
           Our team has extensive experience in business solutions.<br>
           We look forward to discussing this opportunity further.<br>
           Please contact us if you have any questions.
         </p>

         <p style="font-size: 10px; color: #2c3e50; margin-top: 40px;">Sincerely,</p>

         <p style="font-size: 10px; font-weight: bold; color: #1e3d59; background-color: #f8f9fa; padding: 10px 12px; border-radius: 3px; display: inline-block; margin-top: 24px;">YOUR NAME</p>
       `,
  },
];
