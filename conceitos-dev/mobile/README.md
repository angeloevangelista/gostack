# Conceitos do React Native

## Elementos

Os elementos, no React Native...

- Não possuem significado semântico.
- Não possuem estilização própria.
- Possuem `display flex` por padrão.

### `<View />`

Elemento genérico para `containers`, equivalente a `div`, `footer`, `header`, `main`, `aside`, `section` na programação web.

### `<Text />`

Elemento usado para textos, equivalente a `p`, `span`, `strong`, `h1`...

## Configuração da API

| Dispositivo                         | Usar                                        |
| ----------------------------------- | ------------------------------------------- |
| IOS / Emulador                      | localhost                                   |
| IOS / Físico                        | IP Máquina                                  |
| Android / Emulador (Android Studio) | localhost (adb reverse tcp:PORTA tcp:PORTA) |
| Android / Emulador (Android Studio) | 10.0.2.2                                    |
| Android / Emulador (Genymotion)     | 10.0.3.2                                    |
| Android / Físico                    | IP Máquina                                  |
