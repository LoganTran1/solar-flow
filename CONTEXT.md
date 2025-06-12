# SolarFlow v6 - Context for New Conversations

## 🔄 **Quick Handoff Guide**
When starting a new conversation, reference this file to understand the complete project context.

## 📝 **Essential Key Terms**
- **KW blocks** = **keyword blocks** = **iframes** = Blue accordion-style sections that open SERP
- **Nation logo** = Orange rounded rectangle with white star (⭐) + "Nation" text  
- **SERP** = Search Engine Results Page (serp.html with Nation.com styling)
- **RSOC** = Content marketing page (rsoc-page.html - main demo page)
- **Dev Nav** = Red developer navigation bar (remove before production)

## 🎨 **Styling Philosophy (CRITICAL)**
- ✅ **Always be 100% truthful** about what can and cannot be copied exactly
- ✅ **Copy complete CSS properties** from inspect tool when provided
- ✅ **Use CSS variables** for consistent theming: `var(--primary)`, `var(--body-font)`
- ✅ **Acknowledge limitations** like font rendering differences, browser variations
- ✅ **Ask for clarification** when styling doesn't match perfectly
- ✅ **Mobile-first approach** with responsive design principles

## 🏗️ **Project Structure**
```
solarflow-v6/
├── index.html          # Hero/landing page
├── flow.html           # Solar conversion flow  
├── rsoc-page.html      # Content page with KW blocks (MAIN DEMO)
├── serp.html           # Nation.com styled search results
├── server.js           # Serves everything on port 8084
├── README.md           # Comprehensive documentation
├── QUICK_START.txt     # Visual quick reference
└── CONTEXT.md          # This handoff file
```

## 🎯 **Core Functionality**
1. **User Journey**: RSOC content → Click KW block → Opens Nation SERP → Revenue via sponsored ads
2. **KW Blocks**: Blue (#5865f2) blocks with orange hover, exactly 80px height, CSS variable system
3. **Nation SERP**: Authentic styling with grey sponsored results, blue related searches
4. **Mobile Optimization**: 2-line headlines, above-the-fold KW blocks, centered logo
5. **🚀 Flow Overview Mobile**: Horizontal scrolling between 3 stages with touch support
6. **📱 Conference Presentations**: Perfect for mobile demos at conferences and meetings

## 🚀 **How to Start**
```powershell
Set-Location "C:\Users\Logan.Tran\Desktop\solarflow-v6"; node server.js
# Open: http://localhost:8084/rsoc-page.html
```

### **For Future Conversations - Say:**
*"Can you run the SolarFlow v6 server using the PowerShell command, then give me the local links?"*

## 📱 **Mobile Design Specs**
- **Headlines**: 1.6rem font, 1.1 line-height, forced to 2 lines
- **KW Blocks**: 12px gap, 80px fixed height, above-the-fold positioning  
- **Logo**: Centered with `margin: 0 auto` on mobile
- **White Space**: Minimized between title/author/paragraph (8px margins)

## 🎨 **CSS Variable System**
```css
:root {
    --primary: #f5a623;           /* Orange brand color */
    --body-font: "Source Serif Pro"; /* Main typography */
    --wp--preset--color--vivid-cyan-blue: #0693e3; /* Blue accent */
    --wp--preset--spacing--50: 1.5rem; /* Standard spacing */
}
```

## 🔍 **Nation.com SERP Features**
- **Logo**: Orange rectangle with white star (⭐)
- **Search Icons**: Dark blue search + new close icon from Nation CDN
- **Sponsored Results**: Grey text (#545454) with bold "Sponsored" labels
- **Related Searches**: Blue text (#1a0dab) matching search standards
- **Click Tracking**: JavaScript analytics for all interactions

## 🛠️ **Development Notes**
- **Port**: Everything runs on 8084
- **Dev Nav**: Red bar on all pages (search "DEV NAV" to remove)
- **File Access**: Use `http://localhost:8084/index.html` (direct path)
- **Testing**: Start with rsoc-page.html for main demo
- **Mobile Testing**: Check headline line count, KW block visibility

## ⚠️ **Common Issues & Solutions**
- **Styling not applying**: Use `!important` for mobile overrides
- **KW blocks different heights**: Use `height: 80px` (not min-height)
- **Mobile headline too tall**: Reduce font-size with `!important`
- **Nation logo not showing**: Check SVG base64 encoding is complete

## 🔄 **For New Conversations, Say:**
*"Can you run the SolarFlow v6 server using the PowerShell command, then give me the local links? Also read the README.md, QUICK_START.txt, and CONTEXT.md files for complete project understanding. Key terms: KW blocks = keyword blocks = iframes (blue sections). Always be 100% truthful about CSS copying accuracy."*

## 📊 **Recent Major Updates (v6)**
- CSS variable system implementation
- KW blocks with fixed 80px heights  
- Mobile-first design with 2-line headlines
- Nation logo with white star across all pages
- Above-the-fold KW block positioning
- Sources section hidden until read more
- Comprehensive documentation for handoffs
- **🚀 Mobile Horizontal Scrolling (BREAKTHROUGH)**
- **📱 Flow Overview Mobile Conference Optimization**
- **🎯 3-Stage Navigation with Touch Support**
- **🔄 Perfect Stage Positioning & Snap Behavior**
