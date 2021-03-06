// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "SceneTeamAvatar.proto" (syntax proto3),// tslint:disable
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
import { AbilityControlBlock } from "./AbilityControlBlock";
import { SceneEntityInfo } from "./SceneEntityInfo";
import { ServerBuff } from "./ServerBuff";
import { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";
import { SceneAvatarInfo } from "./SceneAvatarInfo";
import { AvatarInfo } from "./AvatarInfo";
/**
 * @generated from protobuf message SceneTeamAvatar
 */
export interface SceneTeamAvatar {
    /**
     * @generated from protobuf field: uint32 player_uid = 1;
     */
    playerUid: number;
    /**
     * @generated from protobuf field: uint64 avatar_guid = 2;
     */
    avatarGuid: bigint;
    /**
     * @generated from protobuf field: uint32 scene_id = 3;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: uint32 entity_id = 4;
     */
    entityId: number;
    /**
     * @generated from protobuf field: AvatarInfo avatar_info = 5;
     */
    avatarInfo?: AvatarInfo;
    /**
     * @generated from protobuf field: SceneAvatarInfo scene_avatar_info = 6;
     */
    sceneAvatarInfo?: SceneAvatarInfo;
    /**
     * @generated from protobuf field: AbilitySyncStateInfo avatar_ability_info = 7;
     */
    avatarAbilityInfo?: AbilitySyncStateInfo;
    /**
     * @generated from protobuf field: repeated ServerBuff server_buff_list = 8;
     */
    serverBuffList: ServerBuff[];
    /**
     * @generated from protobuf field: SceneEntityInfo scene_entity_info = 9;
     */
    sceneEntityInfo?: SceneEntityInfo;
    /**
     * @generated from protobuf field: uint64 weapon_guid = 10;
     */
    weaponGuid: bigint;
    /**
     * @generated from protobuf field: uint32 weapon_entity_id = 11;
     */
    weaponEntityId: number;
    /**
     * @generated from protobuf field: AbilitySyncStateInfo weapon_ability_info = 12;
     */
    weaponAbilityInfo?: AbilitySyncStateInfo;
    /**
     * @generated from protobuf field: AbilityControlBlock ability_control_block = 13;
     */
    abilityControlBlock?: AbilityControlBlock;
    /**
     * @generated from protobuf field: bool is_reconnect = 14;
     */
    isReconnect: boolean;
    /**
     * @generated from protobuf field: bool is_player_cur_avatar = 15;
     */
    isPlayerCurAvatar: boolean;
    /**
     * @generated from protobuf field: bool is_on_scene = 16;
     */
    isOnScene: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneTeamAvatar$Type extends MessageType<SceneTeamAvatar> {
    constructor() {
        super("SceneTeamAvatar", [
            { no: 1, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "avatar_info", kind: "message", T: () => AvatarInfo },
            { no: 6, name: "scene_avatar_info", kind: "message", T: () => SceneAvatarInfo },
            { no: 7, name: "avatar_ability_info", kind: "message", T: () => AbilitySyncStateInfo },
            { no: 8, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ServerBuff },
            { no: 9, name: "scene_entity_info", kind: "message", T: () => SceneEntityInfo },
            { no: 10, name: "weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "weapon_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "weapon_ability_info", kind: "message", T: () => AbilitySyncStateInfo },
            { no: 13, name: "ability_control_block", kind: "message", T: () => AbilityControlBlock },
            { no: 14, name: "is_reconnect", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "is_player_cur_avatar", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "is_on_scene", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<SceneTeamAvatar>): SceneTeamAvatar {
        const message = { playerUid: 0, avatarGuid: 0n, sceneId: 0, entityId: 0, serverBuffList: [], weaponGuid: 0n, weaponEntityId: 0, isReconnect: false, isPlayerCurAvatar: false, isOnScene: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneTeamAvatar>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneTeamAvatar): SceneTeamAvatar {
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
                    message.avatarInfo = AvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarInfo);
                    break;
                case /* SceneAvatarInfo scene_avatar_info */ 6:
                    message.sceneAvatarInfo = SceneAvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneAvatarInfo);
                    break;
                case /* AbilitySyncStateInfo avatar_ability_info */ 7:
                    message.avatarAbilityInfo = AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarAbilityInfo);
                    break;
                case /* repeated ServerBuff server_buff_list */ 8:
                    message.serverBuffList.push(ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* SceneEntityInfo scene_entity_info */ 9:
                    message.sceneEntityInfo = SceneEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneEntityInfo);
                    break;
                case /* uint64 weapon_guid */ 10:
                    message.weaponGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 weapon_entity_id */ 11:
                    message.weaponEntityId = reader.uint32();
                    break;
                case /* AbilitySyncStateInfo weapon_ability_info */ 12:
                    message.weaponAbilityInfo = AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.weaponAbilityInfo);
                    break;
                case /* AbilityControlBlock ability_control_block */ 13:
                    message.abilityControlBlock = AbilityControlBlock.internalBinaryRead(reader, reader.uint32(), options, message.abilityControlBlock);
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SceneTeamAvatar, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 player_uid = 1; */
        if (message.playerUid !== 0)
            writer.tag(1, WireType.Varint).uint32(message.playerUid);
        /* uint64 avatar_guid = 2; */
        if (message.avatarGuid !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.avatarGuid);
        /* uint32 scene_id = 3; */
        if (message.sceneId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.sceneId);
        /* uint32 entity_id = 4; */
        if (message.entityId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.entityId);
        /* AvatarInfo avatar_info = 5; */
        if (message.avatarInfo)
            AvatarInfo.internalBinaryWrite(message.avatarInfo, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* SceneAvatarInfo scene_avatar_info = 6; */
        if (message.sceneAvatarInfo)
            SceneAvatarInfo.internalBinaryWrite(message.sceneAvatarInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* AbilitySyncStateInfo avatar_ability_info = 7; */
        if (message.avatarAbilityInfo)
            AbilitySyncStateInfo.internalBinaryWrite(message.avatarAbilityInfo, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated ServerBuff server_buff_list = 8; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* SceneEntityInfo scene_entity_info = 9; */
        if (message.sceneEntityInfo)
            SceneEntityInfo.internalBinaryWrite(message.sceneEntityInfo, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* uint64 weapon_guid = 10; */
        if (message.weaponGuid !== 0n)
            writer.tag(10, WireType.Varint).uint64(message.weaponGuid);
        /* uint32 weapon_entity_id = 11; */
        if (message.weaponEntityId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.weaponEntityId);
        /* AbilitySyncStateInfo weapon_ability_info = 12; */
        if (message.weaponAbilityInfo)
            AbilitySyncStateInfo.internalBinaryWrite(message.weaponAbilityInfo, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* AbilityControlBlock ability_control_block = 13; */
        if (message.abilityControlBlock)
            AbilityControlBlock.internalBinaryWrite(message.abilityControlBlock, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* bool is_reconnect = 14; */
        if (message.isReconnect !== false)
            writer.tag(14, WireType.Varint).bool(message.isReconnect);
        /* bool is_player_cur_avatar = 15; */
        if (message.isPlayerCurAvatar !== false)
            writer.tag(15, WireType.Varint).bool(message.isPlayerCurAvatar);
        /* bool is_on_scene = 16; */
        if (message.isOnScene !== false)
            writer.tag(16, WireType.Varint).bool(message.isOnScene);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneTeamAvatar
 */
export const SceneTeamAvatar = new SceneTeamAvatar$Type();
