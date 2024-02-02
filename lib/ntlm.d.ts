export function createType1Message(workstation: any, target: any, authenticationType?: string): string;
export function decodeType2Message(str: any, authenticationType?: string): {
    flags: any;
    encoding: string;
    version: number;
    challenge: any;
    targetName: any;
    targetInfo: {};
};
export function createType3Message(type2Message: any, username: any, password: any, workstation: any, target: any, authenticationType?: string): string;
//# sourceMappingURL=ntlm.d.ts.map