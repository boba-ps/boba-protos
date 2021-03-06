// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "SceneTimeNotify.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message SceneTimeNotify
 */
export interface SceneTimeNotify {
    /**
     * @generated from protobuf field: uint32 scene_id = 1;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: bool is_paused = 2;
     */
    isPaused: boolean;
    /**
     * @generated from protobuf field: uint64 scene_time = 3;
     */
    sceneTime: bigint;
}
/**
 * @generated from protobuf enum SceneTimeNotify.CmdId
 */
export enum SceneTimeNotify_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1,
    /**
     * @generated from protobuf enum value: CMD_ID = 230;
     */
    CMD_ID = 230
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneTimeNotify$Type extends MessageType<SceneTimeNotify> {
    constructor() {
        super("SceneTimeNotify", [
            { no: 1, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_paused", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "scene_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<SceneTimeNotify>): SceneTimeNotify {
        const message = { sceneId: 0, isPaused: false, sceneTime: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneTimeNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneTimeNotify): SceneTimeNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 scene_id */ 1:
                    message.sceneId = reader.uint32();
                    break;
                case /* bool is_paused */ 2:
                    message.isPaused = reader.bool();
                    break;
                case /* uint64 scene_time */ 3:
                    message.sceneTime = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SceneTimeNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 scene_id = 1; */
        if (message.sceneId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.sceneId);
        /* bool is_paused = 2; */
        if (message.isPaused !== false)
            writer.tag(2, WireType.Varint).bool(message.isPaused);
        /* uint64 scene_time = 3; */
        if (message.sceneTime !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.sceneTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneTimeNotify
 */
export const SceneTimeNotify = new SceneTimeNotify$Type();
