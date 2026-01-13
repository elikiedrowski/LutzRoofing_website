#!/bin/bash

# Deployment Script for Lutz Roofing Website
# Run this script to push to GitHub

echo "🚀 Lutz Roofing Website - GitHub Deployment"
echo "============================================"
echo ""

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "✅ Remote 'origin' already configured"
    git remote -v
else
    echo "📝 Please create a new repository on GitHub:"
    echo "   1. Go to https://github.com/new"
    echo "   2. Name: LutzRoofing-website (or your preferred name)"
    echo "   3. Keep it Public or Private (your choice)"
    echo "   4. DO NOT initialize with README, .gitignore, or license"
    echo ""
    echo "Once created, enter the repository URL:"
    echo "Example: https://github.com/yourusername/LutzRoofing-website.git"
    echo ""
    read -p "Enter GitHub repository URL: " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        echo "❌ No URL provided. Exiting."
        exit 1
    fi
    
    echo "🔗 Adding remote origin..."
    git remote add origin "$REPO_URL"
fi

echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Next Steps for Deployment:"
    echo "================================"
    echo ""
    echo "Option 1: GitHub Pages (Free Hosting)"
    echo "  1. Go to your repository on GitHub"
    echo "  2. Click Settings → Pages"
    echo "  3. Source: Deploy from branch 'main'"
    echo "  4. Folder: / (root)"
    echo "  5. Save and wait 1-2 minutes"
    echo "  6. Your site will be live at: https://yourusername.github.io/repo-name"
    echo ""
    echo "Option 2: Netlify (Free, Custom Domain)"
    echo "  1. Go to https://app.netlify.com"
    echo "  2. Click 'Add new site' → 'Import from Git'"
    echo "  3. Connect your GitHub repository"
    echo "  4. Deploy settings: leave defaults"
    echo "  5. Click 'Deploy site'"
    echo "  6. Set custom domain in site settings (optional)"
    echo ""
    echo "Option 3: Vercel (Free, Fast CDN)"
    echo "  1. Go to https://vercel.com"
    echo "  2. Click 'Import Project'"
    echo "  3. Connect GitHub and select repository"
    echo "  4. Click 'Deploy'"
    echo ""
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "  - Repository doesn't exist on GitHub"
    echo "  - Wrong URL format"
    echo "  - Authentication required (set up SSH key or use HTTPS with token)"
    echo ""
    echo "To set up authentication:"
    echo "  GitHub Token: git remote set-url origin https://TOKEN@github.com/user/repo.git"
    echo "  Or use SSH: git remote set-url origin git@github.com:user/repo.git"
fi
