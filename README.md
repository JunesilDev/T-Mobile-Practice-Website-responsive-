T-Mobile Practice Website (Responsive)

A mobile-first, responsive recreation of the T-Mobile homepage, built with plain HTML, CSS, and JavaScript as a front-end practice project. The layout adapts from small phones up to wide desktop screens, including a completely different navigation for each.

Disclaimer: This is a student project for learning purposes only. It is not affiliated with or endorsed by T-Mobile. T-Mobile names, logos, and trademarks belong to their respective owners.

Features

Navigation

Sticky header that stays visible while scrolling
Mobile/tablet: hamburger menu that opens a slide-out panel with accordion dropdowns (Plans, Phones & Devices, Deals, Coverage, Join Us), a search box, and a collapsible Contact & Support section
Desktop (1020px+): two-tier navigation bar with hover mega-menus and a "My Account" dropdown with a log-in button

Page sections

Horizontally scrollable quick-action cards (Pick a plan, Buy a phone, Get home internet, etc.)
"Switch to T-Mobile" call-to-action banner
Promo cards ("Introducing NOTHING", "Switch and save $750", Galaxy Z Fold8)
Two scrollable carousels ("Shop our best deals" and "Great benefits from the brands you love") with left/right arrow buttons that disable at the start and end
"Compare our most popular plans" pricing cards
"Explore T-Mobile" image grid
Multi-section footer with accordion links on mobile and a multi-column layout on larger screens
Built With
HTML5: semantic structure, inline SVG icons
CSS3: Flexbox, CSS Grid, CSS custom properties (variables), transitions, and media queries
Vanilla JavaScript: menu toggling, accordions, carousel scrolling, and hover dropdowns (no frameworks or libraries)
Getting Started
Run locally
Clone the repository:
   git clone https://github.com/JunesilDev/T-Mobile-Practice-Website-responsive-.git
Open the project folder:
   cd T-Mobile-Practice-Website-responsive-
Open the HTML file in your browser, or right-click it in VS Code and choose Open with Live Server.

Some product images load from T-Mobile's CDN, so an internet connection is needed to see them.

Project Structure
T-Mobile-Practice-Website-responsive-/
├── index.html        (main page)
├── prac1v2.css       (all styles and responsive breakpoints)
├── prac1v2.js        (menus, dropdowns, carousels)
└── img/              (logo and local images)


Responsive Breakpoints
Screen width	What changes
Below 601px	Single-column mobile layout, hamburger menu, footer accordions
601px and up	Slide-out menu becomes a side panel, plan cards sit side by side, multi-column footer
750px and up	Promo cards switch to image-left / text-right
1020px and up	Full desktop navigation with mega-menus replaces the hamburger menu
1050px and up	The two promo cards sit side by side
What I Learned
Building a layout mobile-first and scaling up with media queries
Creating accessible dropdowns, accordions, and carousels with vanilla JavaScript
Organizing colors and spacing with CSS variables
Using Git and GitHub to manage and publish a project
Author

Junesil, BSCS-1C GitHub: @JunesilDev

License

This project is for educational purposes only
