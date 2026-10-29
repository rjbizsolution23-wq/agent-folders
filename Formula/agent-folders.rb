class AgentFolders < Formula
  desc "Universal AI-Native Folder & Agent Architecture CLI"
  homepage "https://github.com/rjbizsolution23-wq/agent-folders"
  url "https://github.com/rjbizsolution23-wq/agent-folders/archive/refs/tags/v1.0.0.tar.gz"
  sha256 "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" # placeholder
  license "Apache-2.0"

  depends_on "node"
  depends_on "python@3.11"

  def install
    bin.install "bin/agent-folders.js" => "agent-folders"
    prefix.install Dir[".ai", "adapters", "scripts", "docs", "AGENTS.md", "CLAUDE.md", ".cursorrules", "GEMINI.md"]
  end

  test do
    system "#{bin}/agent-folders", "doctor"
  end
end
