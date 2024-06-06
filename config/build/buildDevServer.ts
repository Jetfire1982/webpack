import type {Configuration as DevServerCnfiguration} from 'webpack-dev-server'   
import { BuildOptions } from './types/types'

export function buildDevServer(options: BuildOptions): DevServerCnfiguration{
    return {
        port: options.port ?? 3000,
        open: true
    }
}