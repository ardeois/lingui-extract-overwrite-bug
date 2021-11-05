import React from 'react';
import {t, Trans} from '@lingui/macro';
import {i18n} from '@lingui/core';
import {I18nProvider} from '@lingui/react'
import {messages} from './locales/fr/messages'
import logo from './logo.svg';
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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p><Trans>Translation test A</Trans></p>
                    {/* Have to use this syntax sometimes when we have a single quote, eslint could enforce this syntax */}
                    <p><Trans>{`Translation test B`}</Trans></p>
                    <p><Trans id="translation_c">Translation test C</Trans></p>
                    <p>{translationD}</p>
                    <p>{translationE}</p>
                </header>
            </div>
        </I18nProvider>
    );
}

export default App;
