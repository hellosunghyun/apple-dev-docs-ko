---
source_path: "documentation/AVFoundation/avassetwriterinput/performsmultipassencodingifsupported.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/performsmultipassencodingifsupported"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:performsmultipassencodingifsupported:0000:0001">performsMultiPassEncodingIfSupported</span>

<span class="ko-segment" data-segment-id="seg:paragraph:performsmultipassencodingifsupported:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:performsmultipassencodingifsupported:0002:0001">입력이 소스 미디어 데이터를 다단계로 인코딩하려고 시도하는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:performsmultipassencodingifsupported:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:performsmultipassencodingifsupported:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:performsmultipassencodingifsupported:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:performsmultipassencodingifsupported:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:performsmultipassencodingifsupported:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:performsmultipassencodingifsupported:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:performsmultipassencodingifsupported:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var performsMultiPassEncodingIfSupported: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value is <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a> while the effect is in progress, but changes to a valid time when the reaction effect completes and the system removes it from the list of <a href="avcapturedevice/reactioneffectsinprogress.md">@@TOKEN_1@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이는 append한 미디어 데이터를 분석하고 특정 구간을 서로 다른 매개변수로 다시 인코딩함으로써 수행됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">재인코딩을 수행하려면 해당 구간의 미디어 데이터를 다시 append해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">입력이 다시 append할 구간을 지정하는 방법은 <a href="avassetwriterinput/currentpassdescription.md">@@TOKEN_0@@</a> property와 <a href="avassetwriterinput/markcurrentpassasfinished(">@@TOKEN_1@@</a>.md) method를 참고합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 property의 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>인 경우, 동일한 asset writer에 연결된 다른 입력의 <a href="avassetwriterinput/isreadyformoremediadata.md">@@TOKEN_1@@</a> 값이 더 자주 그리고 더 긴 시간 동안 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_2@@</a>일 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">특히, 다중 패스를 수행하지 않는 입력의 <a href="avassetwriterinput/isreadyformoremediadata.md">@@TOKEN_0@@</a> 값은 asset writer의 <a href="avassetwriter/startwriting(">@@TOKEN_1@@</a>.md) 메서드 호출 후 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_2@@</a>로 시작할 수 있으며, 모든 멀티패스 입력이 최종 pass를 완료한 뒤까지 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_3@@</a>로 변경되지 않을 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 property의 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>인 경우 입력은 압축 샘플을 출력 파일에 쓰기 전에 하나 이상의 임시 파일에 데이터를 저장할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">임시 파일 쓰기 위치를 지정해야 하는 경우 자산 작성기의 <a href="avassetwriter/directoryfortemporaryfiles.md">@@TOKEN_0@@</a> property를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">기본값은 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>이며, 이는 추가 분석이 수행되지 않고 구간을 다시 인코딩하지 않음을 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">모든 자산 작성기 입력 구성에서 소스 미디어에 대해 다중 패스를 수행한다고 이점을 얻는 것은 아닙니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">선택한 인코더가 다중 패스를 수행할 수 있는지 확인하려면 <a href="avassetwriter/startwriting(">@@TOKEN_0@@</a>.md) 호출 후 <a href="avassetwriterinput/canperformmultiplepasses.md">@@TOKEN_1@@</a> 값을 조회합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">❗ **중요**: <a href="avassetwriterinput/expectsmediadatainrealtime.md">@@TOKEN_0@@</a> 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>일 때 이 property 값을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>로 설정하면 오류입니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0002">또한 asset writer에 포함된 다른 입력 중 하나라도 <a href="avassetwriterinput/expectsmediadatainrealtime.md">@@TOKEN_0@@</a> 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>일 때, 이 property가 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>로 설정된 입력이 포함되는 것도 오류입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetwriterinput/canperformmultiplepasses.md">var canPerformMultiplePasses: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">append된 미디어 데이터에 대해 입력이 다중 패스를 수행할 수 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetwriterinput/currentpassdescription.md">var currentPassDescription: AVAssetWriterInputPassDescription?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 pass의 요구 사항을 설명하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetwriterinputpassdescription.md">class AVAssetWriterInputPassDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 pass의 요구 사항을 조회하기 위한 인터페이스를 정의하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetwriterinput/markcurrentpassasfinished.md">func markCurrentPassAsFinished()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">입력에서 append된 미디어를 분석해 특정 구간을 다시 인코딩하여 결과가 개선되는지 판단하도록 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetwriterinput/respondtoeachpassdescription(on:using:">func respondToEachPassDescription(on: dispatch_queue_t, using: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력이 새 pass를 시작할 때마다 callback을 호출하도록 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avassetwriterinput/multipasscontroller.md">AVAssetWriterInput.MultiPassController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">멀티 패스가 지원되는 경우 작성기 입력 receiver에 대해 pass 설명의 async sequence를 수신할 수 있는 인터페이스를 제공합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/performsmultipassencodingifsupported">View on Apple Developer</a>*</span>
