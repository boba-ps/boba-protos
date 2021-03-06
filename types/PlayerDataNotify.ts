// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "PlayerDataNotify.proto" (syntax proto3),// tslint:disable
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
 * @generated from protobuf message PlayerDataNotify
 */
export interface PlayerDataNotify {
    /**
     * @generated from protobuf field: string nick_name = 1;
     */
    nickName: string;
    /**
     * @generated from protobuf field: uint64 server_time = 2;
     */
    serverTime: bigint;
    /**
     * @generated from protobuf field: bool is_first_login_today = 3;
     */
    isFirstLoginToday: boolean;
    /**
     * @generated from protobuf field: uint32 region_id = 4;
     */
    regionId: number;
    /**
     * @generated from protobuf field: map<uint32, PropValue> prop_map = 6;
     */
    propMap: {
        [key: number]: PropValue;
    };
}
/**
 * @generated from protobuf enum PlayerDataNotify.CmdId
 */
export enum PlayerDataNotify_CmdId {
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
     * @generated from protobuf enum value: CMD_ID = 142;
     */
    CMD_ID = 142
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerDataNotify$Type extends MessageType<PlayerDataNotify> {
    constructor() {
        super("PlayerDataNotify", [
            { no: 1, name: "nick_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "server_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "is_first_login_today", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "region_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => PropValue } }
        ]);
    }
    create(value?: PartialMessage<PlayerDataNotify>): PlayerDataNotify {
        const message = { nickName: "", serverTime: 0n, isFirstLoginToday: false, regionId: 0, propMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerDataNotify): PlayerDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string nick_name */ 1:
                    message.nickName = reader.string();
                    break;
                case /* uint64 server_time */ 2:
                    message.serverTime = reader.uint64().toBigInt();
                    break;
                case /* bool is_first_login_today */ 3:
                    message.isFirstLoginToday = reader.bool();
                    break;
                case /* uint32 region_id */ 4:
                    message.regionId = reader.uint32();
                    break;
                case /* map<uint32, PropValue> prop_map */ 6:
                    this.binaryReadMap6(message.propMap, reader, options);
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
    private binaryReadMap6(map: PlayerDataNotify["propMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PlayerDataNotify["propMap"] | undefined, val: PlayerDataNotify["propMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlayerDataNotify.prop_map");
            }
        }
        map[key ?? 0] = val ?? PropValue.create();
    }
    internalBinaryWrite(message: PlayerDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string nick_name = 1; */
        if (message.nickName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.nickName);
        /* uint64 server_time = 2; */
        if (message.serverTime !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.serverTime);
        /* bool is_first_login_today = 3; */
        if (message.isFirstLoginToday !== false)
            writer.tag(3, WireType.Varint).bool(message.isFirstLoginToday);
        /* uint32 region_id = 4; */
        if (message.regionId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.regionId);
        /* map<uint32, PropValue> prop_map = 6; */
        for (let k of Object.keys(message.propMap)) {
            writer.tag(6, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            PropValue.internalBinaryWrite(message.propMap[k as any], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerDataNotify
 */
export const PlayerDataNotify = new PlayerDataNotify$Type();
