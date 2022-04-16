"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarEnterSceneInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ServerBuff_1 = require("./ServerBuff");
const AbilitySyncStateInfo_1 = require("./AbilitySyncStateInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEnterSceneInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarEnterSceneInfo", [
            { no: 1, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "avatar_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "avatar_ability_info", kind: "message", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 4, name: "buff_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "weapon_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "weapon_ability_info", kind: "message", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 8, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ServerBuff_1.ServerBuff }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, avatarEntityId: 0, buffIdList: [], weaponGuid: 0n, weaponEntityId: 0, serverBuffList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 avatar_guid */ 1:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 avatar_entity_id */ 2:
                    message.avatarEntityId = reader.uint32();
                    break;
                case /* AbilitySyncStateInfo avatar_ability_info */ 3:
                    message.avatarAbilityInfo = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarAbilityInfo);
                    break;
                case /* repeated uint32 buff_id_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.buffIdList.push(reader.uint32());
                    else
                        message.buffIdList.push(reader.uint32());
                    break;
                case /* uint64 weapon_guid */ 5:
                    message.weaponGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 weapon_entity_id */ 6:
                    message.weaponEntityId = reader.uint32();
                    break;
                case /* AbilitySyncStateInfo weapon_ability_info */ 7:
                    message.weaponAbilityInfo = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.weaponAbilityInfo);
                    break;
                case /* repeated ServerBuff server_buff_list */ 8:
                    message.serverBuffList.push(ServerBuff_1.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint64 avatar_guid = 1; */
        if (message.avatarGuid !== 0n)
            writer.tag(1, runtime_2.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 avatar_entity_id = 2; */
        if (message.avatarEntityId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.avatarEntityId);
        /* AbilitySyncStateInfo avatar_ability_info = 3; */
        if (message.avatarAbilityInfo)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.avatarAbilityInfo, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 buff_id_list = 4; */
        if (message.buffIdList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.buffIdList.length; i++)
                writer.uint32(message.buffIdList[i]);
            writer.join();
        }
        /* uint64 weapon_guid = 5; */
        if (message.weaponGuid !== 0n)
            writer.tag(5, runtime_2.WireType.Varint).uint64(message.weaponGuid);
        /* uint32 weapon_entity_id = 6; */
        if (message.weaponEntityId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.weaponEntityId);
        /* AbilitySyncStateInfo weapon_ability_info = 7; */
        if (message.weaponAbilityInfo)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.weaponAbilityInfo, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated ServerBuff server_buff_list = 8; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            ServerBuff_1.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarEnterSceneInfo
 */
exports.AvatarEnterSceneInfo = new AvatarEnterSceneInfo$Type();
