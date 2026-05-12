---
source_path: "documentation/AVFoundation/avassetwriter/metadata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriter/metadata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:metadata:0000:0001">metadata</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata:0002:0001">출력 파일에 기록할 메타데이터 항목의 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0001">iOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0002">iPadOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var metadata: [AVMetadataItem] { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">By default, this value contains the array of devices that the <a href="avcapturedevice/supportedfallbackprimaryconstituentdevices.md">@@TOKEN_0@@</a> property provides.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetwriter/shouldoptimizefornetworkuse.md">var shouldOptimizeForNetworkUse: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">출력 파일을 네트워크에서 재생하기에 더 적합하도록 작성할지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetwriter/directoryfortemporaryfiles.md">var directoryForTemporaryFiles: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">내보내기 과정에서 생성되는 임시 파일을 저장하는 디렉터리입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/metadata">View on Apple Developer</a>*</span>
