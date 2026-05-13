---
source_path: "documentation/AVFoundation/avcapturedevice/activedepthdataformat.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/activedepthdataformat"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:activedepthdataformat:0000:0001">activeDepthDataFormat</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activedepthdataformat:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activedepthdataformat:0002:0001">캡처 장치의 현재 활성 깊이 데이터 형식입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activedepthdataformat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:activedepthdataformat:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activedepthdataformat:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activedepthdataformat:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activedepthdataformat:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var activeDepthDataFormat: AVCaptureDevice.Format? { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="capturing-photos-with-depth.md">Capturing photos with depth</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">You must obtain exclusive access to the device by calling <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md) before setting this property value.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 속성은 활성 형식의 <a href="avcapturedevice/format/supporteddepthdataformats.md">@@TOKEN_0@@</a> 배열에 있는 형식으로만 설정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">지원되지 않는 형식을 설정하려고 하면 예외가 발생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">깊이 데이터의 프레임 속도를 직접 설정할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002">대신 시스템은 깊이 데이터 프레임 속도를 장치의 <a href="avcapturedevice/activevideominframeduration.md">@@TOKEN_0@@</a> 및 <a href="avcapturedevice/activevideomaxframeduration.md">@@TOKEN_1@@</a> 값에 맞춰 동기화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0003">시스템이 활성 비디오 프레임 속도에 맞춰 깊이 데이터를 충분히 빠르게 생성하지 못하면, 장치의 현재 프레임 속도와 같거나 더 낮을 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001"><a href="avcapturedepthdataoutput.md">@@TOKEN_0@@</a>로 깊이 데이터를 전달하면 시스템 부하가 증가해 열 안정성 유지를 위해 비디오 프레임 속도가 낮아질 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">깊이 데이터가 지원되지 않는 장치에서는 이 속성 값이 <code>nil</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">이 속성은 키-값 관측 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001">[var formats: [AVCaptureDevice.Format]](avcapturedevice/formats.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">장치가 지원하는 캡처 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturedevice/activeformat.md">var activeFormat: AVCaptureDevice.Format</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">장치에서 사용 중인 캡처 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturedevice/format.md">AVCaptureDevice.Format</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">캡처 장치가 지원하는 미디어 형식과 캡처 설정을 정의하는 클래스입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/activedepthdataformat">View on Apple Developer</a>*</span>
