"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlinePlayerInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
const MpSettingType_1 = require("./MpSettingType");
// @generated message type with reflection information, may provide speed optimized methods
class OnlinePlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("OnlinePlayerInfo", [
            { no: 1, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "player_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "mp_setting_type", kind: "enum", T: () => ["MpSettingType", MpSettingType_1.MpSettingType] },
            { no: 6, name: "cur_player_num_in_world", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "world_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "name_card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "blacklist_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 13, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, nickname: "", playerLevel: 0, avatarId: 0, mpSettingType: 0, curPlayerNumInWorld: 0, worldLevel: 0, onlineId: "", nameCardId: 0, blacklistUidList: [], signature: "", psnId: "" };
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
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.blacklistUidList.push(reader.uint32());
                    else
                        message.blacklistUidList.push(reader.uint32());
                    break;
                case /* string signature */ 11:
                    message.signature = reader.string();
                    break;
                case /* ProfilePicture profile_picture */ 12:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 uid = 1; */
        if (message.uid !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.uid);
        /* string nickname = 2; */
        if (message.nickname !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.nickname);
        /* uint32 player_level = 3; */
        if (message.playerLevel !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.playerLevel);
        /* uint32 avatar_id = 4; */
        if (message.avatarId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* MpSettingType mp_setting_type = 5; */
        if (message.mpSettingType !== 0)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.mpSettingType);
        /* uint32 cur_player_num_in_world = 6; */
        if (message.curPlayerNumInWorld !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.curPlayerNumInWorld);
        /* uint32 world_level = 7; */
        if (message.worldLevel !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.worldLevel);
        /* string online_id = 8; */
        if (message.onlineId !== "")
            writer.tag(8, runtime_2.WireType.LengthDelimited).string(message.onlineId);
        /* uint32 name_card_id = 9; */
        if (message.nameCardId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.nameCardId);
        /* repeated uint32 blacklist_uid_list = 10; */
        if (message.blacklistUidList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.blacklistUidList.length; i++)
                writer.uint32(message.blacklistUidList[i]);
            writer.join();
        }
        /* string signature = 11; */
        if (message.signature !== "")
            writer.tag(11, runtime_2.WireType.LengthDelimited).string(message.signature);
        /* ProfilePicture profile_picture = 12; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* string psn_id = 13; */
        if (message.psnId !== "")
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.psnId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OnlinePlayerInfo
 */
exports.OnlinePlayerInfo = new OnlinePlayerInfo$Type();
