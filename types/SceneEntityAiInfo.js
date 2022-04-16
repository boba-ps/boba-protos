"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneEntityAiInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ServantInfo_1 = require("./ServantInfo");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityAiInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneEntityAiInfo", [
            { no: 1, name: "is_ai_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "born_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "skill_cd_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 4, name: "servant_info", kind: "message", T: () => ServantInfo_1.ServantInfo },
            { no: 5, name: "ai_threat_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 6, name: "skill_group_cd_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 7, name: "cur_tactic", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isAiOpen: false, skillCdMap: {}, aiThreatMap: {}, skillGroupCdMap: {}, curTactic: 0 };
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
                case /* bool is_ai_open */ 1:
                    message.isAiOpen = reader.bool();
                    break;
                case /* Vector born_pos */ 2:
                    message.bornPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.bornPos);
                    break;
                case /* map<uint32, uint32> skill_cd_map */ 3:
                    this.binaryReadMap3(message.skillCdMap, reader, options);
                    break;
                case /* ServantInfo servant_info */ 4:
                    message.servantInfo = ServantInfo_1.ServantInfo.internalBinaryRead(reader, reader.uint32(), options, message.servantInfo);
                    break;
                case /* map<uint32, uint32> ai_threat_map */ 5:
                    this.binaryReadMap5(message.aiThreatMap, reader, options);
                    break;
                case /* map<uint32, uint32> skill_group_cd_map */ 6:
                    this.binaryReadMap6(message.skillGroupCdMap, reader, options);
                    break;
                case /* uint32 cur_tactic */ 7:
                    message.curTactic = reader.uint32();
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
    binaryReadMap3(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneEntityAiInfo.skill_cd_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneEntityAiInfo.ai_threat_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneEntityAiInfo.skill_group_cd_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_ai_open = 1; */
        if (message.isAiOpen !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isAiOpen);
        /* Vector born_pos = 2; */
        if (message.bornPos)
            Vector_1.Vector.internalBinaryWrite(message.bornPos, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> skill_cd_map = 3; */
        for (let k of Object.keys(message.skillCdMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.skillCdMap[k]).join();
        /* ServantInfo servant_info = 4; */
        if (message.servantInfo)
            ServantInfo_1.ServantInfo.internalBinaryWrite(message.servantInfo, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> ai_threat_map = 5; */
        for (let k of Object.keys(message.aiThreatMap))
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.aiThreatMap[k]).join();
        /* map<uint32, uint32> skill_group_cd_map = 6; */
        for (let k of Object.keys(message.skillGroupCdMap))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.skillGroupCdMap[k]).join();
        /* uint32 cur_tactic = 7; */
        if (message.curTactic !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.curTactic);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneEntityAiInfo
 */
exports.SceneEntityAiInfo = new SceneEntityAiInfo$Type();
