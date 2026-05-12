---
source_path: "documentation/AVFoundation/avcapturestillimageoutput/ishighresolutionstillimageoutputenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/ishighresolutionstillimageoutputenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:ishighresolutionstillimageoutputenabled:0000:0001">isHighResolutionStillImageOutputEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ishighresolutionstillimageoutputenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ishighresolutionstillimageoutputenabled:0002:0001"><code>AVCaptureStillImageOutput</code>이 소스 <code>AVCaptureDevice</code> 객체의 <code>activeFormat</code> 속성이 지원하는 최고 해상도로 정지 이미지를 방출해야 하는지 나타내는 불리언 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ishighresolutionstillimageoutputenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:ishighresolutionstillimageoutputenabled:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ishighresolutionstillimageoutputenabled:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ishighresolutionstillimageoutputenabled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ishighresolutionstillimageoutputenabled:0004:0004">macOS 10.14+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isHighResolutionStillImageOutputEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본적으로 <code>AVCaptureStillImageOutput</code>은 소스 <a href="avcapturedevice.md">@@TOKEN_1@@</a> 인스턴스의 <code>activeFormat.formatDescription</code>과 동일한 치수의 이미지를 방출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">그러나 이 값을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>로 설정하면 수신기가 캡처 장치의 <a href="avcapturedevice/format/highresolutionstillimagedimensions.md">@@TOKEN_1@@</a> 값으로 정지 이미지를 방출합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">**참고**: <code>preferredVideoStabilizationMode</code>를 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>로 설정해 어느 출력이든 동영상 안정화를 사용하도록 하면 <code>AVCaptureStillImageOutput</code>이 방출하는 고해상도 정지 이미지가 10% 이상 작아질 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001">[var availableImageDataCVPixelFormatTypes: [NSNumber]](avcapturestillimageoutput/availableimagedatacvpixelformattypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">출력 설정으로 지정할 수 있는 지원 이미지 픽셀 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[var availableImageDataCodecTypes: [AVVideoCodecType]](avcapturestillimageoutput/availableimagedatacodectypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">출력 설정으로 지정할 수 있는 지원 이미지 코덱 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[var outputSettings: [String : Any]](avcapturestillimageoutput/outputsettings.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">출력의 압축 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="video-settings.md">Video settings</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">표준 키 및 값 상수를 사용해 비디오 처리 설정을 구성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/ishighresolutionstillimageoutputenabled">View on Apple Developer</a>*</span>
