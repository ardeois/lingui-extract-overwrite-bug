import React from 'react';
import {t, Trans} from '@lingui/macro';
import {i18n} from '@lingui/core';
import {I18nProvider} from '@lingui/react'
import {messages} from './locales/en/messages'
import './App.css';

i18n.load('en', messages)
i18n.activate('en')

function App() {
    const translationD = t`Translation test D`;
    const translationE = t({
        id: 'translation_e',
        message: 'Translation test E'
    });
    return (
        <I18nProvider i18n={i18n}>
            {/* Not working ❌ */}
            <p><Trans>Translation test A</Trans></p>
            {/* Not working ❌ */}
            <p><Trans>{`Translation test B`}</Trans></p>
            {/* Working ✅ */}
            <p><Trans id="translation_c">Translation test C</Trans></p>
            {/* Not working ❌ */}
            <p>{translationD}</p>
            {/* Working ✅ */}
            <p>{translationE}</p>
        </I18nProvider>
    );
}

export default App;
