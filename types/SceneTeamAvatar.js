"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneTeamAvatar = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityControlBlock_1 = require("./AbilityControlBlock");
const SceneEntityInfo_1 = require("./SceneEntityInfo");
const ServerBuff_1 = require("./ServerBuff");
const AbilitySyncStateInfo_1 = require("./AbilitySyncStateInfo");
const SceneAvatarInfo_1 = require("./SceneAvatarInfo");
const AvatarInfo_1 = require("./AvatarInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneTeamAvatar$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneTeamAvatar", [
            { no: 1, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "avatar_info", kind: "message", T: () => AvatarInfo_1.AvatarInfo },
            { no: 6, name: "scene_avatar_info", kind: "message", T: () => SceneAvatarInfo_1.SceneAvatarInfo },
            { no: 7, name: "avatar_ability_info", kind: "message", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 8, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ServerBuff_1.ServerBuff },
            { no: 9, name: "scene_entity_info", kind: "message", T: () => SceneEntityInfo_1.SceneEntityInfo },
            { no: 10, name: "weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "weapon_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "weapon_ability_info", kind: "message", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 13, name: "ability_control_block", kind: "message", T: () => AbilityControlBlock_1.AbilityControlBlock },
            { no: 14, name: "is_reconnect", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "is_player_cur_avatar", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "is_on_scene", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { playerUid: 0, avatarGuid: 0n, sceneId: 0, entityId: 0, serverBuffList: [], weaponGuid: 0n, weaponEntityId: 0, isReconnect: false, isPlayerCurAvatar: false, isOnScene: false };
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
                case /* uint32 player_uid */ 1:
                    message.playerUid = reader.uint32();
                    break;
                case /* uint64 avatar_guid */ 2:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 scene_id */ 3:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* AvatarInfo avatar_info */ 5:
                    message.avatarInfo = AvatarInfo_1.AvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarInfo);
                    break;
                case /* SceneAvatarInfo scene_avatar_info */ 6:
                    message.sceneAvatarInfo = SceneAvatarInfo_1.SceneAvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneAvatarInfo);
                    break;
                case /* AbilitySyncStateInfo avatar_ability_info */ 7:
                    message.avatarAbilityInfo = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarAbilityInfo);
                    break;
                case /* repeated ServerBuff server_buff_list */ 8:
                    message.serverBuffList.push(ServerBuff_1.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* SceneEntityInfo scene_entity_info */ 9:
                    message.sceneEntityInfo = SceneEntityInfo_1.SceneEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneEntityInfo);
                    break;
                case /* uint64 weapon_guid */ 10:
                    message.weaponGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 weapon_entity_id */ 11:
                    message.weaponEntityId = reader.uint32();
                    break;
                case /* AbilitySyncStateInfo weapon_ability_info */ 12:
                    message.weaponAbilityInfo = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.weaponAbilityInfo);
                    break;
                case /* AbilityControlBlock ability_control_block */ 13:
                    message.abilityControlBlock = AbilityControlBlock_1.AbilityControlBlock.internalBinaryRead(reader, reader.uint32(), options, message.abilityControlBlock);
                    break;
                case /* bool is_reconnect */ 14:
                    message.isReconnect = reader.bool();
                    break;
                case /* bool is_player_cur_avatar */ 15:
                    message.isPlayerCurAvatar = reader.bool();
                    break;
                case /* bool is_on_scene */ 16:
                    message.isOnScene = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 player_uid = 1; */
        if (message.playerUid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* uint64 avatar_guid = 2; */
        if (message.avatarGuid !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 scene_id = 3; */
        if (message.sceneId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 entity_id = 4; */
        if (message.entityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* AvatarInfo avatar_info = 5; */
        if (message.avatarInfo)
            AvatarInfo_1.AvatarInfo.internalBinaryWrite(message.avatarInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneAvatarInfo scene_avatar_info = 6; */
        if (message.sceneAvatarInfo)
            SceneAvatarInfo_1.SceneAvatarInfo.internalBinaryWrite(message.sceneAvatarInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilitySyncStateInfo avatar_ability_info = 7; */
        if (message.avatarAbilityInfo)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.avatarAbilityInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ServerBuff server_buff_list = 8; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            ServerBuff_1.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneEntityInfo scene_entity_info = 9; */
        if (message.sceneEntityInfo)
            SceneEntityInfo_1.SceneEntityInfo.internalBinaryWrite(message.sceneEntityInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 weapon_guid = 10; */
        if (message.weaponGuid !== 0n)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.weaponGuid);
        /* uint32 weapon_entity_id = 11; */
        if (message.weaponEntityId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.weaponEntityId);
        /* AbilitySyncStateInfo weapon_ability_info = 12; */
        if (message.weaponAbilityInfo)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.weaponAbilityInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityControlBlock ability_control_block = 13; */
        if (message.abilityControlBlock)
            AbilityControlBlock_1.AbilityControlBlock.internalBinaryWrite(message.abilityControlBlock, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_reconnect = 14; */
        if (message.isReconnect !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isReconnect);
        /* bool is_player_cur_avatar = 15; */
        if (message.isPlayerCurAvatar !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isPlayerCurAvatar);
        /* bool is_on_scene = 16; */
        if (message.isOnScene !== false)
            writer.tag(16, runtime_1.WireType.Varint).bool(message.isOnScene);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneTeamAvatar
 */
exports.SceneTeamAvatar = new SceneTeamAvatar$Type();
