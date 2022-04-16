"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneTeamUpdateNotify = exports.SceneTeamUpdateNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SceneTeamAvatar_1 = require("./SceneTeamAvatar");
/**
 * @generated from protobuf enum SceneTeamUpdateNotify.CmdId
 */
var SceneTeamUpdateNotify_CmdId;
(function (SceneTeamUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTeamUpdateNotify_CmdId[SceneTeamUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTeamUpdateNotify_CmdId[SceneTeamUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneTeamUpdateNotify_CmdId[SceneTeamUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1793;
     */
    SceneTeamUpdateNotify_CmdId[SceneTeamUpdateNotify_CmdId["CMD_ID"] = 1793] = "CMD_ID";
})(SceneTeamUpdateNotify_CmdId = exports.SceneTeamUpdateNotify_CmdId || (exports.SceneTeamUpdateNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class SceneTeamUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneTeamUpdateNotify", [
            { no: 1, name: "scene_team_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SceneTeamAvatar_1.SceneTeamAvatar },
            { no: 3, name: "is_in_mp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { sceneTeamAvatarList: [], isInMp: false };
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
                case /* repeated SceneTeamAvatar scene_team_avatar_list */ 1:
                    message.sceneTeamAvatarList.push(SceneTeamAvatar_1.SceneTeamAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_in_mp */ 3:
                    message.isInMp = reader.bool();
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
        /* repeated SceneTeamAvatar scene_team_avatar_list = 1; */
        for (let i = 0; i < message.sceneTeamAvatarList.length; i++)
            SceneTeamAvatar_1.SceneTeamAvatar.internalBinaryWrite(message.sceneTeamAvatarList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_in_mp = 3; */
        if (message.isInMp !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isInMp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneTeamUpdateNotify
 */
exports.SceneTeamUpdateNotify = new SceneTeamUpdateNotify$Type();
