"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialDetail = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
const FriendEnterHomeOption_1 = require("./FriendEnterHomeOption");
const SocialShowAvatarInfo_1 = require("./SocialShowAvatarInfo");
const FriendOnlineState_1 = require("./FriendOnlineState");
const Birthday_1 = require("./Birthday");
// @generated message type with reflection information, may provide speed optimized methods
class SocialDetail$Type extends runtime_5.MessageType {
    constructor() {
        super("SocialDetail", [
            { no: 1, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "birthday", kind: "message", T: () => Birthday_1.Birthday },
            { no: 7, name: "world_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "reserved_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "online_state", kind: "enum", T: () => ["FriendOnlineState", FriendOnlineState_1.FriendOnlineState] },
            { no: 10, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_friend", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "is_mp_mode_available", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "name_card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_in_blacklist", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "is_chat_no_disturb", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 17, name: "remark_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 18, name: "finish_achievement_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "tower_floor_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "tower_level_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "is_show_avatar", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 22, name: "show_avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SocialShowAvatarInfo_1.SocialShowAvatarInfo },
            { no: 23, name: "show_name_card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 24, name: "friend_enter_home_option", kind: "enum", T: () => ["FriendEnterHomeOption", FriendEnterHomeOption_1.FriendEnterHomeOption] },
            { no: 25, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture }
        ]);
    }
    create(value) {
        const message = { uid: 0, nickname: "", level: 0, avatarId: 0, signature: "", worldLevel: 0, reservedList: [], onlineState: 0, param: 0, isFriend: false, isMpModeAvailable: false, onlineId: "", nameCardId: 0, isInBlacklist: false, isChatNoDisturb: false, remarkName: "", finishAchievementNum: 0, towerFloorIndex: 0, towerLevelIndex: 0, isShowAvatar: false, showAvatarInfoList: [], showNameCardIdList: [], friendEnterHomeOption: 0 };
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
                case /* string signature */ 5:
                    message.signature = reader.string();
                    break;
                case /* Birthday birthday */ 6:
                    message.birthday = Birthday_1.Birthday.internalBinaryRead(reader, reader.uint32(), options, message.birthday);
                    break;
                case /* uint32 world_level */ 7:
                    message.worldLevel = reader.uint32();
                    break;
                case /* repeated uint32 reserved_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.reservedList.push(reader.uint32());
                    else
                        message.reservedList.push(reader.uint32());
                    break;
                case /* FriendOnlineState online_state */ 9:
                    message.onlineState = reader.int32();
                    break;
                case /* uint32 param */ 10:
                    message.param = reader.uint32();
                    break;
                case /* bool is_friend */ 11:
                    message.isFriend = reader.bool();
                    break;
                case /* bool is_mp_mode_available */ 12:
                    message.isMpModeAvailable = reader.bool();
                    break;
                case /* string online_id */ 13:
                    message.onlineId = reader.string();
                    break;
                case /* uint32 name_card_id */ 14:
                    message.nameCardId = reader.uint32();
                    break;
                case /* bool is_in_blacklist */ 15:
                    message.isInBlacklist = reader.bool();
                    break;
                case /* bool is_chat_no_disturb */ 16:
                    message.isChatNoDisturb = reader.bool();
                    break;
                case /* string remark_name */ 17:
                    message.remarkName = reader.string();
                    break;
                case /* uint32 finish_achievement_num */ 18:
                    message.finishAchievementNum = reader.uint32();
                    break;
                case /* uint32 tower_floor_index */ 19:
                    message.towerFloorIndex = reader.uint32();
                    break;
                case /* uint32 tower_level_index */ 20:
                    message.towerLevelIndex = reader.uint32();
                    break;
                case /* bool is_show_avatar */ 21:
                    message.isShowAvatar = reader.bool();
                    break;
                case /* repeated SocialShowAvatarInfo show_avatar_info_list */ 22:
                    message.showAvatarInfoList.push(SocialShowAvatarInfo_1.SocialShowAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 show_name_card_id_list */ 23:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.showNameCardIdList.push(reader.uint32());
                    else
                        message.showNameCardIdList.push(reader.uint32());
                    break;
                case /* FriendEnterHomeOption friend_enter_home_option */ 24:
                    message.friendEnterHomeOption = reader.int32();
                    break;
                case /* ProfilePicture profile_picture */ 25:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
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
        /* uint32 level = 3; */
        if (message.level !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.level);
        /* uint32 avatar_id = 4; */
        if (message.avatarId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* string signature = 5; */
        if (message.signature !== "")
            writer.tag(5, runtime_2.WireType.LengthDelimited).string(message.signature);
        /* Birthday birthday = 6; */
        if (message.birthday)
            Birthday_1.Birthday.internalBinaryWrite(message.birthday, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 world_level = 7; */
        if (message.worldLevel !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.worldLevel);
        /* repeated uint32 reserved_list = 8; */
        if (message.reservedList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.reservedList.length; i++)
                writer.uint32(message.reservedList[i]);
            writer.join();
        }
        /* FriendOnlineState online_state = 9; */
        if (message.onlineState !== 0)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.onlineState);
        /* uint32 param = 10; */
        if (message.param !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.param);
        /* bool is_friend = 11; */
        if (message.isFriend !== false)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isFriend);
        /* bool is_mp_mode_available = 12; */
        if (message.isMpModeAvailable !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isMpModeAvailable);
        /* string online_id = 13; */
        if (message.onlineId !== "")
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.onlineId);
        /* uint32 name_card_id = 14; */
        if (message.nameCardId !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.nameCardId);
        /* bool is_in_blacklist = 15; */
        if (message.isInBlacklist !== false)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isInBlacklist);
        /* bool is_chat_no_disturb = 16; */
        if (message.isChatNoDisturb !== false)
            writer.tag(16, runtime_2.WireType.Varint).bool(message.isChatNoDisturb);
        /* string remark_name = 17; */
        if (message.remarkName !== "")
            writer.tag(17, runtime_2.WireType.LengthDelimited).string(message.remarkName);
        /* uint32 finish_achievement_num = 18; */
        if (message.finishAchievementNum !== 0)
            writer.tag(18, runtime_2.WireType.Varint).uint32(message.finishAchievementNum);
        /* uint32 tower_floor_index = 19; */
        if (message.towerFloorIndex !== 0)
            writer.tag(19, runtime_2.WireType.Varint).uint32(message.towerFloorIndex);
        /* uint32 tower_level_index = 20; */
        if (message.towerLevelIndex !== 0)
            writer.tag(20, runtime_2.WireType.Varint).uint32(message.towerLevelIndex);
        /* bool is_show_avatar = 21; */
        if (message.isShowAvatar !== false)
            writer.tag(21, runtime_2.WireType.Varint).bool(message.isShowAvatar);
        /* repeated SocialShowAvatarInfo show_avatar_info_list = 22; */
        for (let i = 0; i < message.showAvatarInfoList.length; i++)
            SocialShowAvatarInfo_1.SocialShowAvatarInfo.internalBinaryWrite(message.showAvatarInfoList[i], writer.tag(22, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 show_name_card_id_list = 23; */
        if (message.showNameCardIdList.length) {
            writer.tag(23, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.showNameCardIdList.length; i++)
                writer.uint32(message.showNameCardIdList[i]);
            writer.join();
        }
        /* FriendEnterHomeOption friend_enter_home_option = 24; */
        if (message.friendEnterHomeOption !== 0)
            writer.tag(24, runtime_2.WireType.Varint).int32(message.friendEnterHomeOption);
        /* ProfilePicture profile_picture = 25; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(25, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SocialDetail
 */
exports.SocialDetail = new SocialDetail$Type();
