"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEnterSceneNotify = exports.PlayerEnterSceneNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EnterType_1 = require("./EnterType");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum PlayerEnterSceneNotify.CmdId
 */
var PlayerEnterSceneNotify_CmdId;
(function (PlayerEnterSceneNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEnterSceneNotify_CmdId[PlayerEnterSceneNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEnterSceneNotify_CmdId[PlayerEnterSceneNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerEnterSceneNotify_CmdId[PlayerEnterSceneNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 249;
     */
    PlayerEnterSceneNotify_CmdId[PlayerEnterSceneNotify_CmdId["CMD_ID"] = 249] = "CMD_ID";
})(PlayerEnterSceneNotify_CmdId = exports.PlayerEnterSceneNotify_CmdId || (exports.PlayerEnterSceneNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEnterSceneNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerEnterSceneNotify", [
            { no: 1, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "scene_begin_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "type", kind: "enum", T: () => ["EnterType", EnterType_1.EnterType] },
            { no: 6, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "prev_scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "prev_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 11, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "world_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_first_login_enter_scene", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "scene_tag_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "is_skip_ui", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 17, name: "enter_reason", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "world_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "scene_transaction", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, sceneBeginTime: 0n, type: 0, targetUid: 0, prevSceneId: 0, dungeonId: 0, worldLevel: 0, enterSceneToken: 0, isFirstLoginEnterScene: false, sceneTagIdList: [], isSkipUi: false, enterReason: 0, worldType: 0, sceneTransaction: "" };
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
                case /* uint32 scene_id */ 1:
                    message.sceneId = reader.uint32();
                    break;
                case /* Vector pos */ 2:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint64 scene_begin_time */ 3:
                    message.sceneBeginTime = reader.uint64().toBigInt();
                    break;
                case /* EnterType type */ 4:
                    message.type = reader.int32();
                    break;
                case /* uint32 target_uid */ 6:
                    message.targetUid = reader.uint32();
                    break;
                case /* uint32 prev_scene_id */ 9:
                    message.prevSceneId = reader.uint32();
                    break;
                case /* Vector prev_pos */ 10:
                    message.prevPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.prevPos);
                    break;
                case /* uint32 dungeon_id */ 11:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 world_level */ 12:
                    message.worldLevel = reader.uint32();
                    break;
                case /* uint32 enter_scene_token */ 13:
                    message.enterSceneToken = reader.uint32();
                    break;
                case /* bool is_first_login_enter_scene */ 14:
                    message.isFirstLoginEnterScene = reader.bool();
                    break;
                case /* repeated uint32 scene_tag_id_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sceneTagIdList.push(reader.uint32());
                    else
                        message.sceneTagIdList.push(reader.uint32());
                    break;
                case /* bool is_skip_ui */ 16:
                    message.isSkipUi = reader.bool();
                    break;
                case /* uint32 enter_reason */ 17:
                    message.enterReason = reader.uint32();
                    break;
                case /* uint32 world_type */ 18:
                    message.worldType = reader.uint32();
                    break;
                case /* string scene_transaction */ 19:
                    message.sceneTransaction = reader.string();
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
        /* uint32 scene_id = 1; */
        if (message.sceneId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* Vector pos = 2; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint64 scene_begin_time = 3; */
        if (message.sceneBeginTime !== 0n)
            writer.tag(3, runtime_2.WireType.Varint).uint64(message.sceneBeginTime);
        /* EnterType type = 4; */
        if (message.type !== 0)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.type);
        /* uint32 target_uid = 6; */
        if (message.targetUid !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* uint32 prev_scene_id = 9; */
        if (message.prevSceneId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.prevSceneId);
        /* Vector prev_pos = 10; */
        if (message.prevPos)
            Vector_1.Vector.internalBinaryWrite(message.prevPos, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 dungeon_id = 11; */
        if (message.dungeonId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* uint32 world_level = 12; */
        if (message.worldLevel !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.worldLevel);
        /* uint32 enter_scene_token = 13; */
        if (message.enterSceneToken !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        /* bool is_first_login_enter_scene = 14; */
        if (message.isFirstLoginEnterScene !== false)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.isFirstLoginEnterScene);
        /* repeated uint32 scene_tag_id_list = 15; */
        if (message.sceneTagIdList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sceneTagIdList.length; i++)
                writer.uint32(message.sceneTagIdList[i]);
            writer.join();
        }
        /* bool is_skip_ui = 16; */
        if (message.isSkipUi !== false)
            writer.tag(16, runtime_2.WireType.Varint).bool(message.isSkipUi);
        /* uint32 enter_reason = 17; */
        if (message.enterReason !== 0)
            writer.tag(17, runtime_2.WireType.Varint).uint32(message.enterReason);
        /* uint32 world_type = 18; */
        if (message.worldType !== 0)
            writer.tag(18, runtime_2.WireType.Varint).uint32(message.worldType);
        /* string scene_transaction = 19; */
        if (message.sceneTransaction !== "")
            writer.tag(19, runtime_2.WireType.LengthDelimited).string(message.sceneTransaction);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerEnterSceneNotify
 */
exports.PlayerEnterSceneNotify = new PlayerEnterSceneNotify$Type();
