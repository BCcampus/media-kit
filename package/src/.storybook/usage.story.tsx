import React from 'react';
import { LogoBCcampus, IconBCcampus, COLORS } from '../';

export default { title: 'BCcampus Media Kit' };

export function Usage() {
  return (
    <div>
      <h2>Colors</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div
          style={{
            width: '100%',
            height: '10rem',
            padding: '1rem',
            backgroundColor: COLORS.DarkBlue,
            color: COLORS.Light,
            fontWeight: 600,
            textAlign: 'center',
            alignContent: 'center',
          }}
        >
          Dark Blue
        </div>
        <div
          style={{
            width: '100%',
            height: '10rem',
            padding: '1rem',
            backgroundColor: COLORS.DarkTurquoise,
            color: COLORS.Light,
            fontWeight: 600,
            textAlign: 'center',
            alignContent: 'center',
          }}
        >
          Dark Turquoise
        </div>
        <div
          style={{
            width: '100%',
            height: '10rem',
            padding: '1rem',
            backgroundColor: COLORS.Orange,
            color: COLORS.Dark,
            fontWeight: 600,
            textAlign: 'center',
            alignContent: 'center',
          }}
        >
          Orange
        </div>
        <div
          style={{
            width: '100%',
            height: '10rem',
            padding: '1rem',
            backgroundColor: COLORS.Turquoise,
            color: COLORS.Light,
            fontWeight: 600,
            textAlign: 'center',
            alignContent: 'center',
          }}
        >
          Turquoise
        </div>
        <div
          style={{
            width: '100%',
            height: '10rem',
            padding: '1rem',
            backgroundColor: COLORS.Sand,
            color: COLORS.Dark,
            fontWeight: 600,
            textAlign: 'center',
            alignContent: 'center',
          }}
        >
          Sand
        </div>
      </div>

      <h2>Logo</h2>
      <div style={{ display: 'flex', gap: '2rem', textAlign: 'center' }}>
        <div style={{ padding: '1rem', flex: 1 }}>
          <strong>Light</strong>
        </div>
        <div style={{ padding: '1rem', flex: 1 }}>
          <strong>Dark</strong>
        </div>
        <div style={{ padding: '1rem', flex: 1 }}>
          <strong>Color</strong>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', height: '20rem' }}>
        <div style={{ backgroundColor: COLORS.Dark, padding: '1rem', flex: 1 }}>
          <LogoBCcampus size="100%" variant="white" />
        </div>
        <div style={{ padding: '1rem', flex: 1 }}>
          <LogoBCcampus size="100%" variant="black" />
        </div>
        <div style={{ padding: '1rem', flex: 1 }}>
          <LogoBCcampus size="100%" variant="color" />
        </div>
      </div>

      <h2>Icon</h2>
      <div style={{ display: 'flex', gap: '2rem', textAlign: 'center' }}>
        <div style={{ padding: '1rem', flex: 1 }}>
          <strong>Light</strong>
        </div>
        <div style={{ padding: '1rem', flex: 1 }}>
          <strong>Dark</strong>
        </div>
        <div style={{ padding: '1rem', flex: 1 }}>
          <strong>Color</strong>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', height: '20rem' }}>
        <div style={{ backgroundColor: COLORS.Dark, padding: '1rem', flex: 1 }}>
          <IconBCcampus size="100%" variant="white" />
        </div>
        <div style={{ padding: '1rem', flex: 1 }}>
          <IconBCcampus size="100%" variant="black" />
        </div>
        <div style={{ padding: '1rem', flex: 1 }}>
          <IconBCcampus size="100%" variant="color" />
        </div>
      </div>
    </div>
  );
}
