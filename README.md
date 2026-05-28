# streitschlichter

Einfache Webseite für Streitschlichter mit einer lokalen Node.js API.

## Start

```bash
npm start
```

Server läuft standardmäßig auf `http://localhost:3000`.

## API

### `GET /api/health`
Healthcheck.

### `GET /api/questions`
Liefert alle eingegangenen Fragen.

### `POST /api/questions`
Speichert eine neue Frage.

Body (JSON):

```json
{
  "senderName": "Max",
  "message": "Ich habe eine Frage..."
}
```

Die Daten werden in `data/questions.json` gespeichert.
