---
source_path: "documentation/ARKit/accessory/locationname.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/accessory/locationname"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:accessorylocationname:0000:0001">Accessory.LocationName</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessorylocationname:0001:0001">**Framework**: ARKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessorylocationname:0002:0001">액세서리에 정의된 변환을 가져오는 위치 이름입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:accessorylocationname:0002:0002">OpenXR 규격을 준수하는 액세서리에 공통인 일부 미리 정의된 위치 이름이 편의상 제공됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:accessorylocationname:0002:0003">이 값은 모든 액세서리에 존재해야 할 필요가 없습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessorylocationname:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:accessorylocationname:0004:0001">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct LocationName
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0008:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0009:0001"><a href="accessory/locationname/init(_:">init(String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0010:0001">편의를 위해 레이블이 없는 init이 제공됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0011:0001"><a href="accessory/locationname/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0012:0001">RawRepresentable에서 요구하는 레이블이 있는 init입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0013:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0014:0001"><a href="accessory/locationname/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0015:0001">이 위치 이름의 텍스트 표현입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0016:0001"><a href="accessory/locationname/rawvalue.md">let rawValue: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0017:0001">위치 이름 문자열입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:type-properties:0018:0001">타입 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0019:0001"><a href="accessory/locationname/aim.md">static let aim: Accessory.LocationName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0020:0001">공간형 게임패드와 스타일러스의 조준점입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0021:0001"><a href="accessory/locationname/grip.md">static let grip: Accessory.LocationName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0022:0001">공간형 게임패드의 그립입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0023:0001"><a href="accessory/locationname/gripsurface.md">static let gripSurface: Accessory.LocationName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0024:0001">공간형 게임패드의 그립 표면입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0025:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0026:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0001"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0002"><a href="../Swift/Decodable.md">Decodable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0003"><a href="../Swift/Encodable.md">Encodable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0006"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0029:0001">*<a href="https://developer.apple.com/documentation/arkit/accessory/locationname">View on Apple Developer</a>*</span>
