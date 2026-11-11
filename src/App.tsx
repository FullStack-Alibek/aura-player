import { VideoPlayer, Video } from '@videojs/react/video';
import { VideoSkin } from '@/components/videojs/video/skin';

const customMuxPlaybackId = import.meta.env.VITE_MUX_PLAYBACK_ID;
const defaultDemoUrl = 'https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/highest.mp4';

const videoSource = customMuxPlaybackId
  ? `https://stream.mux.com/${customMuxPlaybackId}.m3u8`
  : defaultDemoUrl;

export default function App() {
  return (
    <>
      <header className="showcase-header">
        <div className="brand-title">
          <span className="brand-name">Aura Player</span>
          <span className="brand-badge">Video.js v10 Skin</span>
        </div>
        <p className="brand-tagline">Cinematic video experience.</p>
      </header>

      <main className="player-container-card">
        <VideoPlayer>
          <VideoSkin style={{ width: '100%', aspectRatio: '16 / 9' }}>
            <Video
              src={videoSource}
              playsInline
            />
          </VideoSkin>
        </VideoPlayer>
      </main>

      <section className="showcase-info-grid">
        <div className="info-card">
          <h3 className="card-title">Media & Preset Specifications</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
            {customMuxPlaybackId
              ? `Custom Mux Asset Stream (${customMuxPlaybackId})`
              : 'Tears of Steel — High-definition test stream using Video.js v10 primitives.'}
          </p>
          <div className="media-specs">
            <span className="spec-pill">Framework: @videojs/react 10.3.0</span>
            <span className="spec-pill">Preset: Video Preset</span>
            <span className="spec-pill">Skin: Editable Scaffold Source</span>
            <span className="spec-pill">Styling: Vanilla CSS Tokens</span>
          </div>
        </div>

        <div className="info-card">
          <h3 className="card-title">Keyboard Controls</h3>
          <div className="hotkey-list">
            <div className="hotkey-item">
              <span>Play / Pause</span>
              <kbd className="hotkey-key">Space</kbd>
            </div>
            <div className="hotkey-item">
              <span>Fullscreen Toggle</span>
              <kbd className="hotkey-key">F</kbd>
            </div>
            <div className="hotkey-item">
              <span>Mute / Unmute</span>
              <kbd className="hotkey-key">M</kbd>
            </div>
            <div className="hotkey-item">
              <span>Seek ±5s / Volume ±10%</span>
              <kbd className="hotkey-key">Arrow Keys</kbd>
            </div>
          </div>
        </div>
      </section>

      <footer className="showcase-footer">
        AURA PLAYER Skin Design — Video.js v10 Custom Skin Competition.
      </footer>
    </>
  );
}
