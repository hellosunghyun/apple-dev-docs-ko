---
source_path: "documentation/ARKit/accessory.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/accessory"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:accessory:0000:0001">Accessory</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessory:0001:0001">**Framework**: ARKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessory:0002:0001">추적할 액세서리를 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessory:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:accessory:0004:0001">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct Accessory
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:structures:0008:0001">Structures</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0009:0001"><a href="accessory/locationname.md">Accessory.LocationName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0010:0001">액세서리에 정의된 변환을 가져오기 위한 위치 이름입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:structures:0010:0002">OpenXR 사양을 준수하는 액세서리에서 공통으로 사용되는 일부 미리 정의된 위치 이름이 편의상 제공됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:structures:0010:0003">이 항목들은 모든 액세서리에 존재할 필요가 없습니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0011:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0012:0001"><a href="accessory/init(device:">init(device: any GCDevice) async throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0013:0001">GCDevice에서 액세서리를 초기화합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0014:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0001"><a href="accessory/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0016:0001">이 액세서리의 텍스트 표현입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0017:0001"><a href="accessory/id.md">var id: UUID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0018:0001">이 액세서리의 고유 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0019:0001"><a href="accessory/inherentchirality.md">var inherentChirality: Accessory.Chirality</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0020:0001">이 액세서리를 잡기 위해 설계된 손입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0021:0001">[var locations: [Accessory.LocationName]](accessory/locations.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0022:0001">이 액세서리에서 좌표 변환이 제공되는 위치 목록입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0023:0001"><a href="accessory/name.md">var name: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0024:0001">액세서리의 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0025:0001"><a href="accessory/source-swift.property.md">var source: Accessory.Source</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0026:0001">이 액세서리 생성에 사용된 입력 소스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0027:0001"><a href="accessory/usdzfile.md">var usdzFile: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0028:0001">액세서리를 나타내는 USDZ 파일입니다(있는 경우).</span>

### <span class="ko-segment" data-segment-id="seg:heading:enumerations:0029:0001">Enumerations</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0030:0001"><a href="accessory/chirality.md">Accessory.Chirality</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0031:0001">액세서리에 해당하는 손입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0032:0001"><a href="accessory/source-swift.enum.md">Accessory.Source</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0033:0001">Accessory가 로드된 소스 유형입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0034:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0035:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0036:0001"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0036:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0036:0003"><a href="../Swift/Identifiable.md">Identifiable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0036:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0036:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0037:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="accessorytrackingprovider.md">class AccessoryTrackingProvider</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">사용자 환경에서 액세서리의 실시간 위치를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="accessoryanchor.md">struct AccessoryAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">추적되는 액세서리를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="tracking-accessories-in-volumetric-windows.md">Tracking accessories in volumetric windows</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">추적된 핸드헬드 액세서리의 위치와 속도를 변환하여 가상 공을 캔 더미에 던지도록 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="tracking-a-handheld-accessory-as-a-virtual-sculpting-tool.md">Tracking a handheld accessory as a virtual sculpting tool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Apple Vision Pro에서 추적 액세서리를 사용해 가상 조각을 만듭니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/arkit/accessory">View on Apple Developer</a>*</span>
