"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRendererChangedInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EntityRendererChangedInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EntityRendererChangedInfo", [
            { no: 1, name: "changed_renderers", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "visibility_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_cached", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { changedRenderers: {}, visibilityCount: 0, isCached: false };
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
                case /* map<string, uint32> changed_renderers */ 1:
                    this.binaryReadMap1(message.changedRenderers, reader, options);
                    break;
                case /* uint32 visibility_count */ 2:
                    message.visibilityCount = reader.uint32();
                    break;
                case /* bool is_cached */ 3:
                    message.isCached = reader.bool();
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
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field EntityRendererChangedInfo.changed_renderers");
            }
        }
        map[key ?? ""] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, uint32> changed_renderers = 1; */
        for (let k of Object.keys(message.changedRenderers))
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.LengthDelimited).string(k).tag(2, runtime_1.WireType.Varint).uint32(message.changedRenderers[k]).join();
        /* uint32 visibility_count = 2; */
        if (message.visibilityCount !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.visibilityCount);
        /* bool is_cached = 3; */
        if (message.isCached !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isCached);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityRendererChangedInfo
 */
exports.EntityRendererChangedInfo = new EntityRendererChangedInfo$Type();
