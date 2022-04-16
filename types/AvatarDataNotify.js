"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarDataNotify = exports.AvatarDataNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarTeam_1 = require("./AvatarTeam");
const AvatarInfo_1 = require("./AvatarInfo");
/**
 * @generated from protobuf enum AvatarDataNotify.CmdId
 */
var AvatarDataNotify_CmdId;
(function (AvatarDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarDataNotify_CmdId[AvatarDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarDataNotify_CmdId[AvatarDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarDataNotify_CmdId[AvatarDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1694;
     */
    AvatarDataNotify_CmdId[AvatarDataNotify_CmdId["CMD_ID"] = 1694] = "CMD_ID";
})(AvatarDataNotify_CmdId = exports.AvatarDataNotify_CmdId || (exports.AvatarDataNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class AvatarDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarDataNotify", [
            { no: 1, name: "avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AvatarInfo_1.AvatarInfo },
            { no: 2, name: "avatar_team_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => AvatarTeam_1.AvatarTeam } },
            { no: 3, name: "cur_avatar_team_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "choose_avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "temp_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "owned_flycloak_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "owned_costume_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarList: [], avatarTeamMap: {}, curAvatarTeamId: 0, chooseAvatarGuid: 0n, tempAvatarGuidList: [], ownedFlycloakList: [], ownedCostumeList: [] };
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
                case /* repeated AvatarInfo avatar_list */ 1:
                    message.avatarList.push(AvatarInfo_1.AvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint32, AvatarTeam> avatar_team_map */ 2:
                    this.binaryReadMap2(message.avatarTeamMap, reader, options);
                    break;
                case /* uint32 cur_avatar_team_id */ 3:
                    message.curAvatarTeamId = reader.uint32();
                    break;
                case /* uint64 choose_avatar_guid */ 4:
                    message.chooseAvatarGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint64 temp_avatar_guid_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint32 owned_flycloak_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.ownedFlycloakList.push(reader.uint32());
                    else
                        message.ownedFlycloakList.push(reader.uint32());
                    break;
                case /* repeated uint32 owned_costume_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.ownedCostumeList.push(reader.uint32());
                    else
                        message.ownedCostumeList.push(reader.uint32());
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
    binaryReadMap2(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = AvatarTeam_1.AvatarTeam.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarDataNotify.avatar_team_map");
            }
        }
        map[key ?? 0] = val ?? AvatarTeam_1.AvatarTeam.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated AvatarInfo avatar_list = 1; */
        for (let i = 0; i < message.avatarList.length; i++)
            AvatarInfo_1.AvatarInfo.internalBinaryWrite(message.avatarList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, AvatarTeam> avatar_team_map = 2; */
        for (let k of Object.keys(message.avatarTeamMap)) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            AvatarTeam_1.AvatarTeam.internalBinaryWrite(message.avatarTeamMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 cur_avatar_team_id = 3; */
        if (message.curAvatarTeamId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.curAvatarTeamId);
        /* uint64 choose_avatar_guid = 4; */
        if (message.chooseAvatarGuid !== 0n)
            writer.tag(4, runtime_2.WireType.Varint).uint64(message.chooseAvatarGuid);
        /* repeated uint64 temp_avatar_guid_list = 5; */
        if (message.tempAvatarGuidList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tempAvatarGuidList.length; i++)
                writer.uint64(message.tempAvatarGuidList[i]);
            writer.join();
        }
        /* repeated uint32 owned_flycloak_list = 6; */
        if (message.ownedFlycloakList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.ownedFlycloakList.length; i++)
                writer.uint32(message.ownedFlycloakList[i]);
            writer.join();
        }
        /* repeated uint32 owned_costume_list = 7; */
        if (message.ownedCostumeList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.ownedCostumeList.length; i++)
                writer.uint32(message.ownedCostumeList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarDataNotify
 */
exports.AvatarDataNotify = new AvatarDataNotify$Type();
