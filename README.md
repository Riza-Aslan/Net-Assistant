# Net Assistant 🌐

**Net Assistant** ist ein natives Home Assistant Add-on zur Visualisierung deiner Heiminfrastruktur. Es basiert auf dem Projekt "Homelable", wurde jedoch vollständig umgebaut, um Daten direkt aus Home Assistant zu beziehen, anstatt das Netzwerk eigenständig zu scannen.

Verbinde deine Proxmox-Server, OPNsense-Router, USVs (NUT) oder Uptime Kuma Instanzen direkt mit visuellen Knoten auf deiner Leinwand und behalte den Überblick über CPU-Last, RAM-Verbrauch und Online-Status in Echtzeit.

---

## ✨ Features

- **Home Assistant Integration**: Nutzt die Supervisor API, um Zustände direkt aus deinen Entitäten zu lesen.
- **Echtzeit-Mapping**: Verknüpfe Knoten auf der Leinwand manuell mit `sensor.*` oder `binary_sensor.*` Entitäten.
- **Dynamische Metriken**: Anzeige von CPU (%), RAM (%), Disk (%), Batterie (%) und Docker-Containern direkt im Knoten.
- **Ingress Support**: Nahtlose Integration in die Home Assistant Bedienoberfläche ohne zusätzliche Portfreigaben.
- **Visual Canvas**: Interaktive Netzwerk-Topologie basierend auf React Flow (XYFlow).
- **Responsive Design**: Modernes, dunkles Interface (Glassmorphism), optimiert für das Home Assistant Dashboard.

---

## 📸 Screenshots

*(Platzhalter - Die UI ist stark an Homelable angelehnt, jedoch ohne die Scan-Funktion und mit HA-Metrik-Overlays)*

---

## 🚀 Installation

Net Assistant wird als Home Assistant Add-on installiert:

1. Navigiere in deinem Home Assistant zu **Einstellungen > Add-ons > Add-on Store**.
2. Klicke oben rechts auf das Drei-Punkte-Menü und wähle **Repositories**.
3. Füge die URL dieses Repositories hinzu: `https://github.com/Riza-Aslan/Net-Assistant`
4. Suche nach **Net Assistant** in der Liste, installiere es und aktiviere "In der Seitenleiste anzeigen".

---

## 🛠 Konfiguration

### Entitäten verknüpfen
Nach dem Start kannst du Knoten ("Nodes") hinzufügen. Klicke auf einen Knoten, um das **DetailPanel** zu öffnen. Dort findest du die Sektion **Home Assistant Entities**:

- **Status**: Verknüpfe z.B. einen `binary_sensor.ping`, um den Online/Offline-Status zu visualisieren.
- **CPU/RAM/Disk/Battery**: Verknüpfe numerische Sensoren für Hardware-Metriken.
- **Containers**: Verknüpfe Sensoren, die die Anzahl laufender Docker-Container (z.B. via Proxmox oder Portainer Integration) ausgeben.

Das Add-on erkennt automatisch den Status (Online/Offline) basierend auf gängigen HA-Zuständen (`on`, `home`, `up`, `running`, etc.).

---

## 💻 Entwicklung

Das Projekt besteht aus einem **FastAPI** Backend (Proxy zur Supervisor API) und einem **React/Vite** Frontend.

### Struktur
- `net_assistant/backend/`: Python API und Proxy-Logik.
- `net_assistant/frontend/`: React High-Performance Visualisierung.
- `net_assistant/Dockerfile`: Multi-Stage Build für HA.

---

## 📄 Lizenz

MIT License - Siehe [LICENSE](LICENSE) für Details.
