// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "GetPlayerBlacklistReq.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message GetPlayerBlacklistReq
 */
export interface GetPlayerBlacklistReq {
}
/**
 * @generated from protobuf enum GetPlayerBlacklistReq.CmdId
 */
export enum GetPlayerBlacklistReq_CmdId {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    IS_ALLOW_CLIENT = 1,
    /**
     * @generated from protobuf enum value: CMD_ID = 4081;
     */
    CMD_ID = 4081
}
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerBlacklistReq$Type extends MessageType<GetPlayerBlacklistReq> {
    constructor() {
        super("GetPlayerBlacklistReq", []);
    }
    create(value?: PartialMessage<GetPlayerBlacklistReq>): GetPlayerBlacklistReq {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetPlayerBlacklistReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerBlacklistReq): GetPlayerBlacklistReq {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetPlayerBlacklistReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerBlacklistReq
 */
export const GetPlayerBlacklistReq = new GetPlayerBlacklistReq$Type();