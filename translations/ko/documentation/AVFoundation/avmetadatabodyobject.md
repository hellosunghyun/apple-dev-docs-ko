---
source_path: "documentation/AVFoundation/avmetadatabodyobject.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadatabodyobject"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmetadatabodyobject:0000:0001">AVMetadataBodyObject</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadatabodyobject:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadatabodyobject:0002:0001">메타데이터 본문 객체의 인터페이스를 정의하는 추상 클래스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadatabodyobject:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmetadatabodyobject:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadatabodyobject:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadatabodyobject:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadatabodyobject:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadatabodyobject:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVMetadataBodyObject
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">메타데이터 본문 객체는 이미지에서 감지된 단일 신체를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">예를 들어 <a href="avmetadatahumanbodyobject.md">@@TOKEN_0@@</a>, <a href="avmetadatadogbodyobject.md">@@TOKEN_1@@</a>, <a href="avmetadatacatbodyobject.md">@@TOKEN_2@@</a> 등을 나타내는 기본 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-metadata:0010:0001">메타데이터 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-metadata:0011:0001"><a href="avmetadatabodyobject/bodyid.md">var bodyID: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-metadata:0012:0001">이미지에서 객체의 고유 식별자를 정의하는 정수 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0013:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0014:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0015:0001"><a href="avmetadataobject.md">AVMetadataObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0016:0001">상속받는 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0017:0001"><a href="avmetadatacatbodyobject.md">AVMetadataCatBodyObject</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0017:0002"><a href="avmetadatadogbodyobject.md">AVMetadataDogBodyObject</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0017:0003"><a href="avmetadatahumanbodyobject.md">AVMetadataHumanBodyObject</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0017:0004"><a href="avmetadatahumanfullbodyobject.md">AVMetadataHumanFullBodyObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0018:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0006"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0007"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avmetadatacatbodyobject.md">class AVMetadataCatBodyObject</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">이미지에서 감지된 단일 고양이 신체를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avmetadatadogbodyobject.md">class AVMetadataDogBodyObject</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">이미지에서 감지된 단일 개의 신체를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avmetadatahumanbodyobject.md">class AVMetadataHumanBodyObject</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">이미지에서 감지된 단일 인간 신체를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avmetadatahumanfullbodyobject.md">class AVMetadataHumanFullBodyObject</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">이미지에서 감지된 인간의 전신을 나타내는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadatabodyobject">View on Apple Developer</a>*</span>
