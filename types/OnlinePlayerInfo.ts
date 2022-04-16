// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "OnlinePlayerInfo.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ProfilePicture } from "./ProfilePicture";
import { MpSettingType } from "./MpSettingType";
/**
 * @generated from protobuf message OnlinePlayerInfo
 */
export interface OnlinePlayerInfo {
    /**
     * @generated from protobuf field: uint32 uid = 1;
     */
    uid: number;
    /**
     * @generated from protobuf field: string nickname = 2;
     */
    nickname: string;
    /**
     * @generated from protobuf field: uint32 player_level = 3;
     */
    playerLevel: number;
    /**
     * @generated from protobuf field: uint32 avatar_id = 4;
     */
    avatarId: number;
    /**
     * @generated from protobuf field: MpSettingType mp_setting_type = 5;
     */
    mpSettingType: MpSettingType;
    /**
     * @generated from protobuf field: uint32 cur_player_num_in_world = 6;
     */
    curPlayerNumInWorld: number;
    /**
     * @generated from protobuf field: uint32 world_level = 7;
     */
    worldLevel: number;
    /**
     * @generated from protobuf field: string online_id = 8;
     */
    onlineId: string;
    /**
     * @generated from protobuf field: uint32 name_card_id = 9;
     */
    nameCardId: number;
    /**
     * @generated from protobuf field: repeated uint32 blacklist_uid_list = 10;
     */
    blacklistUidList: number[];
    /**
     * @generated from protobuf field: string signature = 11;
     */
    signature: string;
    /**
     * @generated from protobuf field: ProfilePicture profile_picture = 12;
     */
    profilePicture?: ProfilePicture;
    /**
     * @generated from protobuf field: string psn_id = 13;
     */
    psnId: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class OnlinePlayerInfo$Type extends MessageType<OnlinePlayerInfo> {
    constructor() {
        super("OnlinePlayerInfo", [
            { no: 1, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "player_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "mp_setting_type", kind: "enum", T: () => ["MpSettingType", MpSettingType] },
            { no: 6, name: "cur_player_num_in_world", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "world_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "name_card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "blacklist_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "profile_picture", kind: "message", T: () => ProfilePicture },
            { no: 13, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<OnlinePlayerInfo>): OnlinePlayerInfo {
        const message = { uid: 0, nickname: "", playerLevel: 0, avatarId: 0, mpSettingType: 0, curPlayerNumInWorld: 0, worldLevel: 0, onlineId: "", nameCardId: 0, blacklistUidList: [], signature: "", psnId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OnlinePlayerInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OnlinePlayerInfo): OnlinePlayerInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* string nickname */ 2:
                    message.nickname = reader.string();
                    break;
                case /* uint32 player_level */ 3:
                    message.playerLevel = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 4:
                    message.avatarId = reader.uint32();
                    break;
                case /* MpSettingType mp_setting_type */ 5:
                    message.mpSettingType = reader.int32();
                    break;
                case /* uint32 cur_player_num_in_world */ 6:
                    message.curPlayerNumInWorld = reader.uint32();
                    break;
                case /* uint32 world_level */ 7:
                    message.worldLevel = reader.uint32();
                    break;
                case /* string online_id */ 8:
                    message.onlineId = reader.string();
                    break;
                case /* uint32 name_card_id */ 9:
                    message.nameCardId = reader.uint32();
                    break;
                case /* repeated uint32 blacklist_uid_list */ 10:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.blacklistUidList.push(reader.uint32());
                    else
                        message.blacklistUidList.push(reader.uint32());
                    break;
                case /* string signature */ 11:
                    message.signature = reader.string();
                    break;
                case /* ProfilePicture profile_picture */ 12:
                    message.profilePicture = ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* string psn_id */ 13:
                    message.psnId = reader.string();
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
    internalBinaryWrite(message: OnlinePlayerInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 uid = 1; */
        if (message.uid !== 0)
            writer.tag(1, WireType.Varint).uint32(message.uid);
        /* string nickname = 2; */
        if (message.nickname !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.nickname);
        /* uint32 player_level = 3; */
        if (message.playerLevel !== 0)
            writer.tag(3, WireType.Varint).uint32(message.playerLevel);
        /* uint32 avatar_id = 4; */
        if (message.avatarId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.avatarId);
        /* MpSettingType mp_setting_type = 5; */
        if (message.mpSettingType !== 0)
            writer.tag(5, WireType.Varint).int32(message.mpSettingType);
        /* uint32 cur_player_num_in_world = 6; */
        if (message.curPlayerNumInWorld !== 0)
            writer.tag(6, WireType.Varint).uint32(message.curPlayerNumInWorld);
        /* uint32 world_level = 7; */
        if (message.worldLevel !== 0)
            writer.tag(7, WireType.Varint).uint32(message.worldLevel);
        /* string online_id = 8; */
        if (message.onlineId !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.onlineId);
        /* uint32 name_card_id = 9; */
        if (message.nameCardId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.nameCardId);
        /* repeated uint32 blacklist_uid_list = 10; */
        if (message.blacklistUidList.length) {
            writer.tag(10, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.blacklistUidList.length; i++)
                writer.uint32(message.blacklistUidList[i]);
            writer.join();
        }
        /* string signature = 11; */
        if (message.signature !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.signature);
        /* ProfilePicture profile_picture = 12; */
        if (message.profilePicture)
            ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* string psn_id = 13; */
        if (message.psnId !== "")
            writer.tag(13, WireType.LengthDelimited).string(message.psnId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OnlinePlayerInfo
 */
export const OnlinePlayerInfo = new OnlinePlayerInfo$Type();
