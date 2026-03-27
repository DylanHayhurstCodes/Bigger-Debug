// TypeScipt Interface Bigger-Debug
interface DebuggerState {
    isRunning: boolean;
    version: string;
}

const state: DebuggerState = {
    isRunning: true,
    version: "1.0.0"
};

console.log(`Bigger-Debug Interface v${state.version} is now active.`);
