
# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║                    Setup Complete!                         ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo ""
    echo "🚀 Available commands:"
    echo "   npm run dev     - Start development server (opens at http://localhost:3000)"
    echo "   npm run build   - Build for production"
    echo "   npm run preview - Preview production build"
    echo ""
    echo "💡 Run 'npm run dev' to start the development server!"
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi