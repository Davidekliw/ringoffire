export const DEBUG_MODE = (window as any).DEBUG_MODE;

export function ownDebugLogger(name: string, valueToLog: any) {
    if (DEBUG_MODE) {
        console.log(`${name}:`, valueToLog);
    }
}

export function addToDebugVariable(name: string, valueToLog: any) {
    if (DEBUG_MODE) {
        const debug = (window as any).myDebug || {};
        debug[name] = valueToLog;
        (window as any).myDebug = debug;
    };
}

if (typeof DEBUG_MODE !== 'undefined' && DEBUG_MODE) {
    console.log('Debug mode is enabled');
} else {
    console.log('Debug mode is disabled');
}
