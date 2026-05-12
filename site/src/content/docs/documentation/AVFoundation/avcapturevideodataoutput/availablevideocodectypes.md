---
source_path: "documentation/AVFoundation/avcapturevideodataoutput/availablevideocodectypes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/availablevideocodectypes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:availablevideocodectypes:0000:0001">availableVideoCodecTypes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablevideocodectypes:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablevideocodectypes:0002:0001">출력이 지원하는 비디오 코덱입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablevideocodectypes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:availablevideocodectypes:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablevideocodectypes:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablevideocodectypes:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablevideocodectypes:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablevideocodectypes:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var availableVideoCodecTypes: [AVVideoCodecType] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">값에는 출력이 지원하는 비디오 코덱 배열이 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><a href="avvideocodeckey.md">@@TOKEN_0@@</a> 항목의 <a href="avcapturevideodataoutput/videosettings.md">@@TOKEN_1@@</a> 딕셔너리에 지원되는 값을 설정하여 사용 코덱을 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">반환된 목록의 첫 번째 형식이 가장 효율적인 출력 형식입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var availableVideoPixelFormatTypes: [OSType]](avcapturevideodataoutput/availablevideopixelformattypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">출력이 지원하는 비디오 픽셀 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[func availableVideoCodecTypesForAssetWriter(writingTo: AVFileType) -&gt; [AVVideoCodecType]](avcapturevideodataoutput/availablevideocodectypesforassetwriter(writingto:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">출력 파일에 비디오를 기록할 때 출력이 지원하는 비디오 코덱입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocodectype.md">struct AVVideoCodecType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시스템이 비디오 캡처에서 지원하는 코덱을 설명하는 상수 집합입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/availablevideocodectypes">View on Apple Developer</a>*</span>
