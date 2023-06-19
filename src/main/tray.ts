import { BrowserWindow, Menu, Tray } from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
  const tray = new Tray(
    path.resolve(__dirname, '../../resources/rotionTemplate.png'),
  )

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document')
      },
    },
    { type: 'separator' },
    {
      label: 'Documentos recentes',
      enabled: false,
    },
    {
      label: 'doc 1',
      accelerator: 'CmdOrCtrl+1',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'doc 2',
      accelerator: 'CmdOrCtrl+2',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'doc 3',
      accelerator: 'CmdOrCtrl+3',
      acceleratorWorksWhenHidden: false,
    },
    { type: 'separator' },
    {
      label: 'Sair do Rotion',
      role: 'quit',
    },
  ])

  tray.setContextMenu(menu)
}
