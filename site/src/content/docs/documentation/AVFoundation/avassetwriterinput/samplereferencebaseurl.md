---
source_path: "documentation/AVFoundation/avassetwriterinput/samplereferencebaseurl.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/samplereferencebaseurl"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:samplereferencebaseurl:0000:0001">sampleReferenceBaseURL</span>

<span class="ko-segment" data-segment-id="seg:paragraph:samplereferencebaseurl:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:samplereferencebaseurl:0002:0001">샘플 참조의 기준 URL입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:samplereferencebaseurl:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:samplereferencebaseurl:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplereferencebaseurl:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplereferencebaseurl:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplereferencebaseurl:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplereferencebaseurl:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplereferencebaseurl:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var sampleReferenceBaseURL: URL? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 QuickTime 파일과 같이 샘플 참조 쓰기를 지원하는 파일 유형에서만 유효합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">This is equal to <a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md">@@TOKEN_0@@</a> except while recording using an <a href="avcapturemoviefileoutput.md">@@TOKEN_1@@</a> that you configure with different restricted switching behavior conditions.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">URL은 샘플 참조 위치의 상위 디렉터리에 있는 위치를 가리켜야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Devices that don’t support constituent device switching return <a href="avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md">@@TOKEN_0@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avassetwriterinput/preferredmediachunkalignment.md">var preferredMediaChunkAlignment: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">미디어 청크를 정렬하기 위한 바이트 단위 경계입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetwriterinput/preferredmediachunkduration.md">var preferredMediaChunkDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">출력 파일에서 샘플 데이터의 각 청크에 사용할 기간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avassetwriterinput/mediadatalocation-swift.property.md">var mediaDataLocation: AVAssetWriterInput.MediaDataLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">입력에서 미디어 데이터를 배치하고 인터리빙하는 방법을 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avassetwriterinput/mediadatalocation-swift.struct.md">AVAssetWriterInput.MediaDataLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">미디어 데이터를 배치하고 인터리빙하는 방식을 나타내는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/samplereferencebaseurl">View on Apple Developer</a>*</span>
