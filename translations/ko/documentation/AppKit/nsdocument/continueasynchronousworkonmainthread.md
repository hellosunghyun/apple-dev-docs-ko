---
source_path: "documentation/AppKit/nsdocument/continueasynchronousworkonmainthread.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsdocument/continueasynchronousworkonmainthread"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:continueasynchronousworkonmainthread:0000:0001">continueAsynchronousWorkOnMainThread(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:continueasynchronousworkonmainthread:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:continueasynchronousworkonmainthread:0002:0001">전달된 <code>block</code>을 메인 스레드에서 실행합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:continueasynchronousworkonmainthread:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:continueasynchronousworkonmainthread:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
func continueAsynchronousWorkOnMainThread(_ block: @escaping () -> Void)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">메인 스레드가 <a href="nsdocument/performactivity(withsynchronouswaiting:using:">@@TOKEN_0@@</a>.md) 또는 <a href="nsdocument/performsynchronousfileaccess(_:">@@TOKEN_1@@</a>.md)의 호출로 블로킹된 경우, 이 메서드는 해당 블로킹 활동을 중단하고 지정된 <code>block</code>을 실행한 뒤 <code>block</code>이 반환되면 블로킹 활동을 다시 재개합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 메서드의 호출은 전달된 <code>block</code>이 호출되기 전에 항상 반환됩니다. 비메인 스레드에서 작업이 진행 중이고 그 일부를 메인 스레드에서 계속 처리해야 할 때 이 메서드를 호출할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Note that if you are using the <code>NSDocument</code> default undo/redo features, setting the document’s edited status by updating the change count happens automatically.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">예를 들어, <a href="nsdocument/save(to:oftype:for:completionhandler:">@@TOKEN_0@@</a>.md) 메서드는 비동기 저장 중 파일 쓰기가 실제로 완료된 직후에 이 메서드를 사용하며, 저장 작업을 완료하려면 메인 스레드에서 <a href="nsdocument/updatechangecount(withtoken:for:">@@TOKEN_1@@</a>.md) 및 기타 메서드를 호출해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 임의의 스레드에서 호출할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>block</code>: 호출할 블록입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsfontdescriptor/traitkey/slant.md">func performSynchronousFileAccess(() -&gt; Void)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">예약된 파일 액세스 작업이 모두 완료될 때까지 기다린 후 전달된 블록을 호출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsdocument/performasynchronousfileaccess(_:">func performAsynchronousFileAccess((() -&gt; Void) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">예약된 파일 액세스가 완료될 때까지 기다리되 메인 스레드를 차단하지 않고, 이어서 전달된 블록을 호출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsdocument/performactivity(withsynchronouswaiting:using:">func performActivity(withSynchronousWaiting: Bool, using: (() -&gt; Void) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이 메서드의 이전 호출로 예약된 모든 작업이 완료될 때까지 기다린 후 전달된 블록을 호출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsdocument/continueactivity(_:">func continueActivity(() -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">다른 블록을 사용하여 사용자 활동 객체에 대한 작업을 계속 수행합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/appkit/nsdocument/continueasynchronousworkonmainthread(_:">View on Apple Developer</a>)*</span>
