"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendBrief = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlatformType_1 = require("./PlatformType");
const ProfilePicture_1 = require("./ProfilePicture");
const FriendEnterHomeOption_1 = require("./FriendEnterHomeOption");
const SocialShowAvatarInfo_1 = require("./SocialShowAvatarInfo");
const FriendOnlineState_1 = require("./FriendOnlineState");
// @generated message type with reflection information, may provide speed optimized methods
class FriendBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("FriendBrief", [
            { no: 1, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "world_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "online_state", kind: "enum", T: () => ["FriendOnlineState", FriendOnlineState_1.FriendOnlineState] },
            { no: 8, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_mp_mode_available", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "last_active_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "name_card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "mp_player_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_chat_no_disturb", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "chat_sequence", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "remark_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 22, name: "show_avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SocialShowAvatarInfo_1.SocialShowAvatarInfo },
            { no: 23, name: "friend_enter_home_option", kind: "enum", T: () => ["FriendEnterHomeOption", FriendEnterHomeOption_1.FriendEnterHomeOption] },
            { no: 24, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 25, name: "is_game_source", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 26, name: "is_psn_source", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "platform_type", kind: "enum", T: () => ["PlatformType", PlatformType_1.PlatformType] }
        ]);
    }
    create(value) {
        const message = { uid: 0, nickname: "", level: 0, avatarId: 0, worldLevel: 0, signature: "", onlineState: 0, param: 0, isMpModeAvailable: false, onlineId: "", lastActiveTime: 0, nameCardId: 0, mpPlayerNum: 0, isChatNoDisturb: false, chatSequence: 0, remarkName: "", showAvatarInfoList: [], friendEnterHomeOption: 0, isGameSource: false, isPsnSource: false, platformType: 0 };
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
                case /* uint32 level */ 3:
                    message.level = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 4:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 world_level */ 5:
                    message.worldLevel = reader.uint32();
                    break;
                case /* string signature */ 6:
                    message.signature = reader.string();
                    break;
                case /* FriendOnlineState online_state */ 7:
                    message.onlineState = reader.int32();
                    break;
                case /* uint32 param */ 8:
                    message.param = reader.uint32();
                    break;
                case /* bool is_mp_mode_available */ 10:
                    message.isMpModeAvailable = reader.bool();
                    break;
                case /* string online_id */ 11:
                    message.onlineId = reader.string();
                    break;
                case /* uint32 last_active_time */ 12:
                    message.lastActiveTime = reader.uint32();
                    break;
                case /* uint32 name_card_id */ 13:
                    message.nameCardId = reader.uint32();
                    break;
                case /* uint32 mp_player_num */ 14:
                    message.mpPlayerNum = reader.uint32();
                    break;
                case /* bool is_chat_no_disturb */ 15:
                    message.isChatNoDisturb = reader.bool();
                    break;
                case /* uint32 chat_sequence */ 16:
                    message.chatSequence = reader.uint32();
                    break;
                case /* string remark_name */ 17:
                    message.remarkName = reader.string();
                    break;
                case /* repeated SocialShowAvatarInfo show_avatar_info_list */ 22:
                    message.showAvatarInfoList.push(SocialShowAvatarInfo_1.SocialShowAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* FriendEnterHomeOption friend_enter_home_option */ 23:
                    message.friendEnterHomeOption = reader.int32();
                    break;
                case /* ProfilePicture profile_picture */ 24:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* bool is_game_source */ 25:
                    message.isGameSource = reader.bool();
                    break;
                case /* bool is_psn_source */ 26:
                    message.isPsnSource = reader.bool();
                    break;
                case /* PlatformType platform_type */ 27:
                    message.platformType = reader.int32();
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
        /* uint32 uid = 1; */
        if (message.uid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.uid);
        /* string nickname = 2; */
        if (message.nickname !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* uint32 level = 3; */
        if (message.level !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.level);
        /* uint32 avatar_id = 4; */
        if (message.avatarId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* uint32 world_level = 5; */
        if (message.worldLevel !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.worldLevel);
        /* string signature = 6; */
        if (message.signature !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.signature);
        /* FriendOnlineState online_state = 7; */
        if (message.onlineState !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.onlineState);
        /* uint32 param = 8; */
        if (message.param !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.param);
        /* bool is_mp_mode_available = 10; */
        if (message.isMpModeAvailable !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isMpModeAvailable);
        /* string online_id = 11; */
        if (message.onlineId !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* uint32 last_active_time = 12; */
        if (message.lastActiveTime !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.lastActiveTime);
        /* uint32 name_card_id = 13; */
        if (message.nameCardId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.nameCardId);
        /* uint32 mp_player_num = 14; */
        if (message.mpPlayerNum !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.mpPlayerNum);
        /* bool is_chat_no_disturb = 15; */
        if (message.isChatNoDisturb !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isChatNoDisturb);
        /* uint32 chat_sequence = 16; */
        if (message.chatSequence !== 0)
            writer.tag(16, runtime_1.WireType.Varint).uint32(message.chatSequence);
        /* string remark_name = 17; */
        if (message.remarkName !== "")
            writer.tag(17, runtime_1.WireType.LengthDelimited).string(message.remarkName);
        /* repeated SocialShowAvatarInfo show_avatar_info_list = 22; */
        for (let i = 0; i < message.showAvatarInfoList.length; i++)
            SocialShowAvatarInfo_1.SocialShowAvatarInfo.internalBinaryWrite(message.showAvatarInfoList[i], writer.tag(22, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* FriendEnterHomeOption friend_enter_home_option = 23; */
        if (message.friendEnterHomeOption !== 0)
            writer.tag(23, runtime_1.WireType.Varint).int32(message.friendEnterHomeOption);
        /* ProfilePicture profile_picture = 24; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(24, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_game_source = 25; */
        if (message.isGameSource !== false)
            writer.tag(25, runtime_1.WireType.Varint).bool(message.isGameSource);
        /* bool is_psn_source = 26; */
        if (message.isPsnSource !== false)
            writer.tag(26, runtime_1.WireType.Varint).bool(message.isPsnSource);
        /* PlatformType platform_type = 27; */
        if (message.platformType !== 0)
            writer.tag(27, runtime_1.WireType.Varint).int32(message.platformType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FriendBrief
 */
exports.FriendBrief = new FriendBrief$Type();
