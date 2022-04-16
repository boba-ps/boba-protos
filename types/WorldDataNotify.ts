// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "WorldDataNotify.proto" (syntax proto3),// tslint:disable
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
import { PropValue } from "./PropValue";
/**
 * @generated from protobuf message WorldDataNotify
 */
export interface WorldDataNotify {
    /**
     * @generated from protobuf field: map<uint32, PropValue> world_prop_map = 1;
     */
    worldPropMap: {
        [key: number]: PropValue;
    };
}
/**
 * @generated from protobuf enum WorldDataNotify.CmdId
 */
export enum WorldDataNotify_CmdId {
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
     * @generated from protobuf enum value: CMD_ID = 3219;
     */
    CMD_ID = 3219
}
/**
 * @generated from protobuf enum WorldDataNotify.DataType
 */
export enum WorldDataNotify_DataType {
    /**
     * @generated from protobuf enum value: DATA_NONE = 0;
     */
    DATA_NONE = 0,
    /**
     * @generated from protobuf enum value: WORLD_LEVEL = 1;
     */
    WORLD_LEVEL = 1,
    /**
     * @generated from protobuf enum value: IS_IN_MP_MODE = 2;
     */
    IS_IN_MP_MODE = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class WorldDataNotify$Type extends MessageType<WorldDataNotify> {
    constructor() {
        super("WorldDataNotify", [
            { no: 1, name: "world_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => PropValue } }
        ]);
    }
    create(value?: PartialMessage<WorldDataNotify>): WorldDataNotify {
        const message = { worldPropMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WorldDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WorldDataNotify): WorldDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, PropValue> world_prop_map */ 1:
                    this.binaryReadMap1(message.worldPropMap, reader, options);
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
    private binaryReadMap1(map: WorldDataNotify["worldPropMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof WorldDataNotify["worldPropMap"] | undefined, val: WorldDataNotify["worldPropMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field WorldDataNotify.world_prop_map");
            }
        }
        map[key ?? 0] = val ?? PropValue.create();
    }
    internalBinaryWrite(message: WorldDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, PropValue> world_prop_map = 1; */
        for (let k of Object.keys(message.worldPropMap)) {
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            PropValue.internalBinaryWrite(message.worldPropMap[k as any], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WorldDataNotify
 */
export const WorldDataNotify = new WorldDataNotify$Type();
