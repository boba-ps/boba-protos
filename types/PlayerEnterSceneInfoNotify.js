"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEnterSceneInfoNotify = exports.PlayerEnterSceneInfoNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MPLevelEntityInfo_1 = require("./MPLevelEntityInfo");
const TeamEnterSceneInfo_1 = require("./TeamEnterSceneInfo");
const AvatarEnterSceneInfo_1 = require("./AvatarEnterSceneInfo");
/**
 * @generated from protobuf enum PlayerEnterSceneInfoNotify.CmdId
 */
var PlayerEnterSceneInfoNotify_CmdId;
(function (PlayerEnterSceneInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    PlayerEnterSceneInfoNotify_CmdId[PlayerEnterSceneInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    PlayerEnterSceneInfoNotify_CmdId[PlayerEnterSceneInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerEnterSceneInfoNotify_CmdId[PlayerEnterSceneInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerEnterSceneInfoNotify_CmdId[PlayerEnterSceneInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
    /**
     * @generated from protobuf enum value: CMD_ID = 246;
     */
    PlayerEnterSceneInfoNotify_CmdId[PlayerEnterSceneInfoNotify_CmdId["CMD_ID"] = 246] = "CMD_ID";
})(PlayerEnterSceneInfoNotify_CmdId = exports.PlayerEnterSceneInfoNotify_CmdId || (exports.PlayerEnterSceneInfoNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEnterSceneInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerEnterSceneInfoNotify", [
            { no: 1, name: "cur_avatar_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_enter_info", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AvatarEnterSceneInfo_1.AvatarEnterSceneInfo },
            { no: 3, name: "team_enter_info", kind: "message", T: () => TeamEnterSceneInfo_1.TeamEnterSceneInfo },
            { no: 4, name: "mp_level_entity_info", kind: "message", T: () => MPLevelEntityInfo_1.MPLevelEntityInfo },
            { no: 5, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { curAvatarEntityId: 0, avatarEnterInfo: [], enterSceneToken: 0 };
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
                case /* uint32 cur_avatar_entity_id */ 1:
                    message.curAvatarEntityId = reader.uint32();
                    break;
                case /* repeated AvatarEnterSceneInfo avatar_enter_info */ 2:
                    message.avatarEnterInfo.push(AvatarEnterSceneInfo_1.AvatarEnterSceneInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* TeamEnterSceneInfo team_enter_info */ 3:
                    message.teamEnterInfo = TeamEnterSceneInfo_1.TeamEnterSceneInfo.internalBinaryRead(reader, reader.uint32(), options, message.teamEnterInfo);
                    break;
                case /* MPLevelEntityInfo mp_level_entity_info */ 4:
                    message.mpLevelEntityInfo = MPLevelEntityInfo_1.MPLevelEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.mpLevelEntityInfo);
                    break;
                case /* uint32 enter_scene_token */ 5:
                    message.enterSceneToken = reader.uint32();
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
        /* uint32 cur_avatar_entity_id = 1; */
        if (message.curAvatarEntityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.curAvatarEntityId);
        /* repeated AvatarEnterSceneInfo avatar_enter_info = 2; */
        for (let i = 0; i < message.avatarEnterInfo.length; i++)
            AvatarEnterSceneInfo_1.AvatarEnterSceneInfo.internalBinaryWrite(message.avatarEnterInfo[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* TeamEnterSceneInfo team_enter_info = 3; */
        if (message.teamEnterInfo)
            TeamEnterSceneInfo_1.TeamEnterSceneInfo.internalBinaryWrite(message.teamEnterInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MPLevelEntityInfo mp_level_entity_info = 4; */
        if (message.mpLevelEntityInfo)
            MPLevelEntityInfo_1.MPLevelEntityInfo.internalBinaryWrite(message.mpLevelEntityInfo, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 enter_scene_token = 5; */
        if (message.enterSceneToken !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerEnterSceneInfoNotify
 */
exports.PlayerEnterSceneInfoNotify = new PlayerEnterSceneInfoNotify$Type();
