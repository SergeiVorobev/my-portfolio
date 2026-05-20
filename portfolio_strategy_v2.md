# Strategiepapier: Positionierung & Upgrade des Portfolios

**Fokus:** Maximierung der Vermittelbarkeit auf dem IT-Markt in Frankfurt am Main durch die Etablierung einer konsistenten „Freelance / IT-Contractor“-Historie und die nahtlose Integration des früheren Management- und Finanzhintergrunds als wertvolle Transferable Skills unter dem neuen Nachnamen **Smazal**.

---

## 1. Strategie „Freelance Contract“ unter neuen Rahmenbedingungen

Der offizielle Freiberufler-Zeitraum seit Oktober 2025 wird im Lebenslauf und auf der Portfolio-Website durch einen Pool kommerzieller Projekte vollständig geschlossen. Dies untermauert das Bild eines autonomen Full-Stack / Cloud-Entwicklers.

* **Kommunikation im Interview:** „Seit Oktober letzten Jahres arbeite ich als unabhängiger IT-Contractor. Mein Hauptprojekt war das Design und die End-to-End-Entwicklung der FinTech-Handelsplattform *CryptoPulse*. Parallel dazu habe ich mehrere kleinere Automatisierungslösungen für Geschäftsprozesse realisiert, darunter asynchrone Buchungssysteme via Telegram mit vollständiger Kalender- und Datenbanksynchronisation. Da diese Verträge erfolgreich abgeschlossen und die Produkte an die Kunden übergeben wurden, suche ich nun eine Festanstellung im Großraum Frankfurt.“
* **Schutz des Quellcodes (NDA):** Sowohl *CryptoPulse* als auch die kommerziellen Bots sind geschütztes geistiges Eigentum der Kunden. Es ist rechtlich und moralisch absolut legitim nicht alles zu zeigen.
* **Simulation von Teamarbeit:** Durch Pull Requests, Code Reviews und Merges mit Kommentaren in den Repositories wird das Einhalten von Standards (Git Flow, Agile) belegt.

---

## 2. Struktur des Portfolio-Portals (Konzept)

Das Projekt wird auf die Nutzung von **7 IT-Tags** umgestellt: `#Backend`, `#FullStack`, `#Cloud`, `#DataScience`, `#ML`, `#AI`, `#IoT`.

---

## 3. Strategische Daten-Integration (public/resumeData.json)

**Wichtiger Hinweis:** Diese Liste enthält die neuen strategischen Ergänzungen. **Bestehende Projekte und Kurse aus dem ursprünglichen JSON müssen erhalten bleiben und mit den neuen Tags ergänzt werden.**

```json
{
  "main": {
    "name": "Sergei Smazal",
    "occupation": "Full-Stack Developer | Cloud & Data Engineer | ML & AI Specialist",
    "description": "Vielseitiger Softwareentwickler mit über 4 Jahren IT-Erfahrung, spezialisiert auf Python-Entwicklung, Cloud-Architekturen (AWS/GCP), Datenverarbeitung (ETL) und moderne KI-Systeme (LLM/AI Agents)."
  },
  "resume": {
    "education": [
      {
        "school": "Technische Universität Breslau (Wrocław University of Science and Technology)",
        "degree": "Bachelor of Science in Informatik (Computer Science)",
        "graduated": "Oktober 2021"
      },
      {
        "school": "Tula Institute of Economics and Informatics",
        "degree": "Bachelor in Finanzen und Kreditwesen",
        "graduated": "Juni 2010"
      }
    ],
    "work": [
      {
        "company": "IT-Freelance / Independent Contractor",
        "title": "Lead Python Developer / Cloud & AI Engineer",
        "years": "Okt. 2025 - Heute",
        "description": "• CryptoPulse: Entwicklung einer automatisierten FinTech-Handelsplattform mit Django und FastAPI.\n• Telegram Automation: Entwicklung asynchroner Telegram-Bots (bot_appointment) für kommerzielle Buchungssysteme."
      }
    ]
  },
  "portfolio": {
    "projects": [
      {
        "title": "CryptoPulse Platform",
        "category": "Commercial Contract Project (NDA Protected)",
        "tags": ["Backend", "FullStack", "Cloud", "AI", "ML"],
        "url": "https://github.com/SergeiSmazal/cryptopulse-specifications"
      },
      {
        "title": "Commercial Appointment Bot",
        "category": "Freelance Project",
        "tags": ["Backend", "AI"],
        "url": "https://github.com/SergeiSmazal/bot_appointment"
      }
    ]
  }
}
```

---

## 4. Technisches Vorkommen

Dieser Workflow stellt sicher, dass die neue Strategie unter Einhaltung der bestehenden Code-Struktur umgesetzt wird.
