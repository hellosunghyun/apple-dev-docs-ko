---
source_path: "documentation/AVFoundation/avcaptionsettingskey.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptionsettingskey"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcaptionsettingskey:0000:0001">AVCaptionSettingsKey</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionsettingskey:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionsettingskey:0002:0001">캡션 변환기와 검증기를 구성하기 위한 딕셔너리 키를 정의하는 구조체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionsettingskey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcaptionsettingskey:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionsettingskey:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionsettingskey:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionsettingskey:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVCaptionSettingsKey
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:keys:0008:0001">Keys</span>

- <span class="ko-segment" data-segment-id="seg:list:keys:0009:0001"><a href="avcaptionsettingskey/mediatype.md">static let mediaType: AVCaptionSettingsKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:keys:0010:0001">캡션 변환 작업의 출력 미디어 유형을 식별하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:keys:0011:0001"><a href="avcaptionsettingskey/mediasubtype.md">static let mediaSubType: AVCaptionSettingsKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:keys:0012:0001">캡션 변환 작업의 출력 미디어 하위 유형을 식별하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:keys:0013:0001"><a href="avcaptionsettingskey/timecodeframeduration.md">static let timeCodeFrameDuration: AVCaptionSettingsKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:keys:0014:0001">시스템이 타임 코드에 사용하는 프레임 지속 시간을 식별하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:keys:0015:0001"><a href="avcaptionsettingskey/usedropframetimecode.md">static let useDropFrameTimeCode: AVCaptionSettingsKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:keys:0016:0001">시스템이 drop frame 타임 코드를 사용하는지 식별하는 키입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0017:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0018:0001"><a href="avcaptionsettingskey/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0019:0001">문자열로 설정 키를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0020:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0021:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0002"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0003"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0023:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcaptionformatconformer.md">class AVCaptionFormatConformer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">표준 캡션을 특정 형식으로 변환하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avcaptionconversionvalidator.md">class AVCaptionConversionValidator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">변환 작업의 캡션을 검증하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptionsettingskey">View on Apple Developer</a>*</span>
