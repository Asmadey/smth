# Claude Code Configuration

This directory contains configuration for Claude Code.

## Recommended Plugins

### Claude-Mem

The claude-mem plugin provides persistent memory across coding sessions, helping maintain context and continuity in development.

**Installation:**

```
> /plugin marketplace add thedotmack/claude-mem
> /plugin install claude-mem
```

**Features:**
- Persistent memory across sessions
- Automatic context injection
- Web UI for memory management (http://localhost:37777)
- SQLite-based storage

**Documentation:** https://docs.claude-mem.ai

## Project Setup

This project uses:
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Lucide React for icons

When working on this project with Claude Code and claude-mem plugin, the assistant will have access to previous session context, making development more efficient.
