---
source_path: "documentation/AVFoundation/avcapturephotocapturedelegate/photooutput-willcapturephotofor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput-willcapturephotofor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:photooutputwillcapturephotofor:0000:0001">photoOutput(_:willCapturePhotoFor:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:photooutputwillcapturephotofor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:photooutputwillcapturephotofor:0002:0001">사진 캡처가 곧 발생함을 대리자에게 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:photooutputwillcapturephotofor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:photooutputwillcapturephotofor:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:photooutputwillcapturephotofor:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:photooutputwillcapturephotofor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:photooutputwillcapturephotofor:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:photooutputwillcapturephotofor:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, willCapturePhotoFor resolvedSettings: AVCaptureResolvedPhotoSettings)
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="tracking-photo-capture-progress.md">Tracking photo capture progress</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">사진 출력은 캡처 시작 시점에 가능한 한 가깝게 이 메서드를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">셔터 소리가 활성화되어 있으면, 이 호출은 사진 출력이 셔터 소리 재생을 시작한 바로 다음에 발생합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0001">**참고**: Live Photo 캡처는 셔터 소리를 비활성화합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0002">일부 지역에서는 기기의 무음 스위치가 셔터 소리를 비활성화할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>output</code>: 캡처를 수행하는 사진 출력입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>resolvedSettings</code>: 이 캡처에 사용된 설정을 설명하는 객체입니다. 이 객체의 <a href="avcapturephotosettings/uniqueid.md">@@TOKEN_1@@</a> 값을 캡처를 시작할 때 사용한 사진 설정 객체의 <a href="avcapturephotosettings/uniqueid.md">@@TOKEN_2@@</a> 속성과 일치시켜서 이 대리자 호출이 어떤 캡처 요청에 해당하는지 확인할 수 있습니다. 이 객체를 사용하면 사진 출력이 자동 설정에 대해 선택한 값을 확인할 수도 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturephotocapturedelegate/photooutput(_:willbegincapturefor:">func photoOutput(AVCapturePhotoOutput, willBeginCaptureFor: AVCaptureResolvedPhotoSettings)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">캡처 출력이 설정을 해석했으며 곧 캡처 프로세스를 시작할 것임을 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturephotocapturedelegate/photooutput(_:didcapturephotofor:">func photoOutput(AVCapturePhotoOutput, didCapturePhotoFor: AVCaptureResolvedPhotoSettings)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">사진이 촬영되었음을 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturephotocapturedelegate/photooutput(_:didfinishcapturefor:error:">func photoOutput(AVCapturePhotoOutput, didFinishCaptureFor: AVCaptureResolvedPhotoSettings, error: (any Error)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">캡처 프로세스가 완료되었음을 대리자에게 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:willcapturephotofor:">View on Apple Developer</a>)*</span>
