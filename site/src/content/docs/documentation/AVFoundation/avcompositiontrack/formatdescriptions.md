---
source_path: "documentation/AVFoundation/avcompositiontrack/formatdescriptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcompositiontrack/formatdescriptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:formatdescriptions:0000:0001">formatDescriptions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:formatdescriptions:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:formatdescriptions:0002:0001">트랙이 참조하는 미디어 샘플의 형식 설명입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:formatdescriptions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:formatdescriptions:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:formatdescriptions:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:formatdescriptions:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:formatdescriptions:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:formatdescriptions:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:formatdescriptions:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:formatdescriptions:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var formatDescriptions: [Any] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 배열에는 트랙이 참조하는 미디어 샘플의 형식을 나타내는 <a href="https://developer.apple.com/documentation/CoreMedia/CMFormatDescription">@@TOKEN_0@@</a> 객체가 포함됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">자산 트랙은 일반적으로 균일한 미디어(예: 동일한 인코딩 설정을 사용하는 미디어)로 구성되며 단일 형식 설명을 포함합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">그러나 경우에 따라 자산 트랙에는 여러 형식 설명이 포함될 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">예를 들어 H.264로 인코딩된 비디오 트랙은 일부 세그먼트에서 Main 프로파일을 사용하고 다른 세그먼트에서는 High 프로파일을 사용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0004">또한 <a href="avassettrack.md">@@TOKEN_0@@</a>을(를) 하위 클래스화하는 개별 <a href="avcompositiontrack.md">@@TOKEN_1@@</a>에서도 서로 다른 코덱을 사용하는 오디오 또는 비디오 세그먼트가 포함될 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><a href="https://developer.apple.com/documentation/CoreMedia/CMFormatDescription">@@TOKEN_0@@</a>를 사용하여 트랙이 참조하는 미디어의 저수준 세부 정보를 확인할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">예를 들어 아래 코드처럼 트랙의 미디어 유형과 하위 유형에 대한 세부 정보를 검색할 수 있습니다.</span>

```swift
extension AVAssetTrack {
    var mediaFormat: String {
        get async throws {
            var format = ""
            let descriptions = try await load(.formatDescriptions)
            for (index, formatDesc) in descriptions.enumerated() {
                // Get a string representation of the media type.
                let type =
                    CMFormatDescriptionGetMediaType(formatDesc).toString()
                // Get a string representation of the media subtype.
                let subType =
                    CMFormatDescriptionGetMediaSubType(formatDesc).toString()
                // Format the string as type/subType, such as vide/avc1 or soun/aac.
                format += "\(type)/\(subType)"
                // Comma-separate if there's more than one format description.
                if index < descriptions.count - 1 {
                    format += ","
                }
            }
            return format
        }
    }
}
 
extension FourCharCode {
    // Create a string representation of a FourCC.
    func toString() -> String {
        let bytes: [CChar] = [
            CChar((self >> 24) & 0xff),
            CChar((self >> 16) & 0xff),
            CChar((self >> 8) & 0xff),
            CChar(self & 0xff),
            0
        ]
        let result = String(cString: bytes)
        let characterSet = CharacterSet.whitespaces
        return result.trimmingCharacters(in: characterSet)
    }
}
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[var formatDescriptionReplacements: [AVCompositionTrackFormatDescriptionReplacement]](avcompositiontrack/formatdescriptionreplacements.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">대체 형식 설명자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcompositiontrackformatdescriptionreplacement.md">class AVCompositionTrackFormatDescriptionReplacement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">형식 설명자와 해당 대체 항목을 나타내는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcompositiontrack/formatdescriptions">View on Apple Developer</a>*</span>
