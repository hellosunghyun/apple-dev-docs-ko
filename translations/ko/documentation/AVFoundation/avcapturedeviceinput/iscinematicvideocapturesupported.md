---
source_path: "documentation/AVFoundation/avcapturedeviceinput/iscinematicvideocapturesupported.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/iscinematicvideocapturesupported"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:iscinematicvideocapturesupported:0000:0001">isCinematicVideoCaptureSupported</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscinematicvideocapturesupported:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscinematicvideocapturesupported:0002:0001">Cinematic Video capture를 지원하는지 지정하는 <code>BOOL</code> 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscinematicvideocapturesupported:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:iscinematicvideocapturesupported:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscinematicvideocapturesupported:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscinematicvideocapturesupported:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscinematicvideocapturesupported:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscinematicvideocapturesupported:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isCinematicVideoCaptureSupported: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Cinematic Video 캡처를 사용하면 피사체(사람, 반려동물 등)가 선명하게 초점이 맞춰진 상태를 유지하면서 배경(또는 전경)에 보기 좋은 블러를 적용하는 시뮬레이션된 심도 효과를 얻을 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">This message will be sent regardless of whether the session’s <a href="avcapturesession/automaticallyrunsdeferredstart.md">@@TOKEN_0@@</a> property is set.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">See <a href="avcapturesession/setdeferredstartdelegate(_:deferredstartdelegatecallbackqueue:">@@TOKEN_0@@</a>.md) documentation for more information.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><code>[</code>simulatedAperture<code>](avcapturedeviceinput/simulatedaperture.md)</code> 속성을 사용해 녹화를 시작하기 전에 비디오의 시뮬레이션 조리개를 조정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002"><a href="avcapturedevice.md">@@TOKEN_0@@</a>에서 Cinematic Video 전용 초점 메서드를 사용하면 초점 전환을 동적으로 제어할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">A capture device’s <a href="avcapturedevice/focuspointofinterest.md">@@TOKEN_0@@</a> and <a href="avcapturedevice/exposurepointofinterest.md">@@TOKEN_1@@</a> properties provide a <a href="https://developer.apple.com/documentation/CoreFoundation/CGPoint">@@TOKEN_2@@</a> value where <code>{0,0}</code> represents the top-left and <code>{1,1}</code> represents the bottom-right of the unrotated image.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">The system takes the layer’s frame size and its <a href="avcapturevideopreviewlayer/videogravity.md">@@TOKEN_0@@</a> into consideration when making the conversion.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">Use the <a href="avcapturephoto/filedatarepresentation(">@@TOKEN_0@@</a>.md) or <a href="avcapturephoto/cgimagerepresentation(">@@TOKEN_1@@</a>.md) method to obtain compressed image data.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">이 속성이 <code>true</code>에서 <code>false</code>로 변경되면 <a href="avcapturedeviceinput/iscinematicvideocaptureenabled.md">@@TOKEN_2@@</a>도 <code>false</code>로 다시 바뀝니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0004">이전에 Cinematic Video 캡처를 사용 설정한 상태에서 구성을 변경한 경우 <a href="avcapturedeviceinput/iscinematicvideocaptureenabled.md">@@TOKEN_0@@</a>를 다시 <code>true</code>로 설정해야 할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0005">이 속성은 키-값 관찰이 가능합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">**참고**: <a href="avcapturedepthdataoutput.md">@@TOKEN_0@@</a>는 <a href="avcapturedeviceinput/iscinematicvideocaptureenabled.md">@@TOKEN_1@@</a>가 <code>true</code>로 설정된 경우 지원되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0002">이 두 기능을 모두 사용해 <a href="avcapturesession.md">@@TOKEN_0@@</a>를 실행하면 <code>NSInvalidArgumentException</code>이 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedeviceinput/iscinematicvideocaptureenabled.md">var isCinematicVideoCaptureEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedeviceinput/simulatedaperture.md">var simulatedAperture: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">얕은 심도의 시뮬레이션 조리개입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/iscinematicvideocapturesupported">View on Apple Developer</a>*</span>
