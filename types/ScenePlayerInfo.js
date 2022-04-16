"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayerInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayerInfo", [
            { no: 1, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "is_connected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "online_player_info", kind: "message", T: () => OnlinePlayerInfo_1.OnlinePlayerInfo }
        ]);
    }
    create(value) {
        const message = { uid: 0, peerId: 0, name: "", isConnected: false, sceneId: 0 };
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
                case /* uint32 peer_id */ 2:
                    message.peerId = reader.uint32();
                    break;
                case /* string name */ 3:
                    message.name = reader.string();
                    break;
                case /* bool is_connected */ 4:
                    message.isConnected = reader.bool();
                    break;
                case /* uint32 scene_id */ 5:
                    message.sceneId = reader.uint32();
                    break;
                case /* OnlinePlayerInfo online_player_info */ 6:
                    message.onlinePlayerInfo = OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.onlinePlayerInfo);
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
        /* uint32 peer_id = 2; */
        if (message.peerId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.peerId);
        /* string name = 3; */
        if (message.name !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.name);
        /* bool is_connected = 4; */
        if (message.isConnected !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isConnected);
        /* uint32 scene_id = 5; */
        if (message.sceneId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* OnlinePlayerInfo online_player_info = 6; */
        if (message.onlinePlayerInfo)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.onlinePlayerInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayerInfo
 */
exports.ScenePlayerInfo = new ScenePlayerInfo$Type();
